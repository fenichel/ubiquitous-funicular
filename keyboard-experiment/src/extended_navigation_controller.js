
import { NavigationController } from '@blockly/keyboard-navigation';
import { Constants } from '@blockly/keyboard-navigation';
import { ASTNode, ShortcutRegistry } from 'blockly';
import { utils as BlocklyUtils } from 'blockly';
import { keyCodeArrayToString } from './keynames';

export class ExtendedNavigationController extends NavigationController {
    // override
    init() {
        this.addShortcutHandlers();
        this.registerDefaults();
        this.remapDefaults();
        this.registerAddOns();
    }

    registerListShortcuts() {
        const listShortcuts = {
            name: 'List shortcuts',
            preconditionFn: (workspace) => {
                return (true);
            },
            // List out the current shortcuts.
            // Adds a table to the announcer area.
            callback: (workspace) => {
                const announcer = document.getElementById('announcer');

                const registry = ShortcutRegistry.registry.getRegistry();
                let text = 
                `<table>
<thead>
  <tr>
    <td>Shortcut name</td>
    <td>Shortcut action</td>
  </tr>
</thead>`;
                for (const keyboardShortcut of Object.keys(registry)) {
                    const codeArray = ShortcutRegistry.registry.getKeyCodesByShortcutName(keyboardShortcut);
                    const prettyPrinted = keyCodeArrayToString(codeArray);
                    text += `<tr><td>${keyboardShortcut}</td> <td>${prettyPrinted}</td></tr>`;
                }
                announcer.innerHTML = text + '\n</table/>';
                return true;
            },
        };

        ShortcutRegistry.registry.register(listShortcuts);
        ShortcutRegistry.registry.addKeyMapping(
            BlocklyUtils.KeyCodes.SLASH,
            listShortcuts.name,
        );
    }

    registerAnnounce() {
        const announceShortcut = {
            name: 'Announce',
            preconditionFn: (workspace) => {
                return (true);
            },
            // Print out the type of the current node.
            callback: (workspace) => {
                const announcer = document.getElementById('announcer');
                const cursor = workspace.getCursor();
                announcer.innerText = cursor.getCurNode().getType();
                return true;
            },
        };

        ShortcutRegistry.registry.register(announceShortcut);
        ShortcutRegistry.registry.addKeyMapping(
            BlocklyUtils.KeyCodes.A,
            announceShortcut.name,
        );
    }

    registerNextSibling() {
        const shortcut = {
            name: 'Go to next sibling',
            preconditionFn: (workspace) => {
                return (true);
            },
            // Jump to the next node at the same level, when in the workspace
            callback: (workspace, e, shortcut) => {
                const announcer = document.getElementById('announcer');
                const cursor = workspace.getCursor();

                if (this.navigation.getState(workspace) == Constants.STATE.WORKSPACE) {
                    if (this.fieldShortcutHandler(workspace, e, shortcut)) {
                        announcer.innerText = 'next sibling (handled by field)';
                        return true;
                    }
                    if (cursor.nextSibling()) {
                        announcer.innerText = 'next sibling (success)';
                        return true;
                    }
                }
                announcer.innerText = 'next sibling (no-op)';
                return false;
            },
        };

        ShortcutRegistry.registry.register(shortcut);
        ShortcutRegistry.registry.addKeyMapping(
            BlocklyUtils.KeyCodes.N,
            shortcut.name,
        );
    }

    registerPreviousSibling() {
        const shortcut = {
            name: 'Go to previous sibling',
            preconditionFn: (workspace) => {
                return (true);
            },
            callback: (workspace, e, shortcut) => {
                const announcer = document.getElementById('announcer');
                const cursor = workspace.getCursor();

                if (this.navigation.getState(workspace) == Constants.STATE.WORKSPACE) {
                    if (this.fieldShortcutHandler(workspace, e, shortcut)) {

                announcer.innerText = 'previous sibling (handled by field)';
                        return true;
                    }
                    if (cursor.previousSibling()) {
                        announcer.innerText = 'previous sibling (success)';
                        return true;
                    }
                }
                announcer.innerText = 'previous sibling (no-op)';
                return false;
            },
        };

        ShortcutRegistry.registry.register(shortcut);
        ShortcutRegistry.registry.addKeyMapping(
            BlocklyUtils.KeyCodes.M,
            shortcut.name,
        );
    }

    registerJumpToRoot() {
        const jumpShortcut = {
            name: 'Jump to root of current stack',
            preconditionFn: (workspace) => {
                return (true);
            },
            // Jump to the root of the current stack.
            callback: (workspace) => {
                const announcer = document.getElementById('announcer');
                const cursor = workspace.getCursor();
                const curNode = cursor.getCurNode();
                const curBlock = curNode.getSourceBlock();
                if (curBlock) {
                    const rootBlock = curBlock.getRootBlock();
                    const stackNode = ASTNode.createStackNode(rootBlock);
                    cursor.setCurNode(stackNode);
                    announcer.innerText = 'jumped to root';
                    return true;
                }
                announcer.innerText = 'could not jump to root';
                return false;
            },
        };

        ShortcutRegistry.registry.register(jumpShortcut);
        ShortcutRegistry.registry.addKeyMapping(
            BlocklyUtils.KeyCodes.R,
            jumpShortcut.name,
        );
    }

    registerAnnounce() {
        const announceShortcut = {
            name: 'Announce',
            preconditionFn: (workspace) => {
                return (true);
            },
            // Print out the type of the current node.
            callback: (workspace) => {
                const announcer = document.getElementById('announcer');
                const cursor = workspace.getCursor();
                announcer.innerText = cursor.getCurNode().getType();
                return true;
            },
        };

        ShortcutRegistry.registry.register(announceShortcut);
        ShortcutRegistry.registry.addKeyMapping(
            BlocklyUtils.KeyCodes.A,
            announceShortcut.name,
        );
    }

    registerAddOns() {
        this.registerAnnounce();
        this.registerPreviousSibling();
        this.registerNextSibling();
        this.registerJumpToRoot();
        this.registerListShortcuts();
    }

    // Remap to use arrow keys instead.
    remapDefaults() {
        ShortcutRegistry.registry.removeAllKeyMappings(Constants.SHORTCUT_NAMES.OUT);
        ShortcutRegistry.registry.addKeyMapping(BlocklyUtils.KeyCodes.LEFT, Constants.SHORTCUT_NAMES.OUT);

        ShortcutRegistry.registry.removeAllKeyMappings(Constants.SHORTCUT_NAMES.IN);
        ShortcutRegistry.registry.addKeyMapping(BlocklyUtils.KeyCodes.RIGHT, Constants.SHORTCUT_NAMES.IN);

        ShortcutRegistry.registry.removeAllKeyMappings(Constants.SHORTCUT_NAMES.PREVIOUS);
        ShortcutRegistry.registry.addKeyMapping(BlocklyUtils.KeyCodes.UP, Constants.SHORTCUT_NAMES.PREVIOUS);

        ShortcutRegistry.registry.removeAllKeyMappings(Constants.SHORTCUT_NAMES.NEXT);
        ShortcutRegistry.registry.addKeyMapping(BlocklyUtils.KeyCodes.DOWN, Constants.SHORTCUT_NAMES.NEXT);
    }
};

export function installNavController(workspace) {

    const navigationController = new ExtendedNavigationController();
    navigationController.init();
    navigationController.addWorkspace(workspace);
    // Turns on keyboard navigation.
    navigationController.enable(workspace);
}