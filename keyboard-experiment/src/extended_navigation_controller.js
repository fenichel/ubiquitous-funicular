
import { NavigationController } from '@blockly/keyboard-navigation';
import { Constants } from '@blockly/keyboard-navigation';
import { ASTNode, ShortcutRegistry } from 'blockly';
import { utils as BlocklyUtils } from 'blockly';

export class ExtendedNavigationController extends NavigationController {
    // override
    init() {
        this.addShortcutHandlers();
        this.registerDefaults();
        this.remapDefaults();
        this.registerAddOns();
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
        this.registerJumpToRoot();
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