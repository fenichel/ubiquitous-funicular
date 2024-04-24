
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

    registerNextStack() {
        const nextStackShortcut = {
            name: 'Go to next stack',
            preconditionFn: (workspace) => {
                return (true);
            },
            // Print out the type of the current node.
            callback: (workspace) => {
                const announcer = document.getElementById('announcer');
                const cursor = workspace.getCursor();
                announcer.innerText = 'next stack';
                return true;
            },
        };

        ShortcutRegistry.registry.register(nextStackShortcut);
        ShortcutRegistry.registry.addKeyMapping(
            BlocklyUtils.KeyCodes.N,
            nextStackShortcut.name,
        );
    }

    registerPreviousStack() {
        const previousStackShortcut = {
            name: 'Go to previous stack',
            preconditionFn: (workspace) => {
                return (true);
            },
            // Print out the type of the current node.
            callback: (workspace) => {
                const announcer = document.getElementById('announcer');
                const cursor = workspace.getCursor();
                const curNode = cursor.getCurNode();
                const curBlock = curNode.getSourceBlock();
                if (curBlock) {
                    const rootBlock = curBlock.getRootBlock();
                    const stackNode = ASTNode.createStackNode(rootBlock);
                    cursor.setCurNode(stackNode);
                    announcer.innerText = 'previous stack';
                } else {
                    announcer.innerText = 'failed';
                }
                return true;
            },
        };

        ShortcutRegistry.registry.register(previousStackShortcut);
        ShortcutRegistry.registry.addKeyMapping(
            BlocklyUtils.KeyCodes.M,
            previousStackShortcut.name,
        );
    }

    registerJumpToRoot() {
        const jumpShortcut = {
            name: 'Jump to root of current stack',
            preconditionFn: (workspace) => {
                return (true);
            },
            // Print out the type of the current node.
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
                } else {
                    announcer.innerText = 'could not jump to root';
                }
                return true;
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
        // Not yet implemented correctly.
        //this.registerPreviousStack();
        //this.registerNextStack();
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