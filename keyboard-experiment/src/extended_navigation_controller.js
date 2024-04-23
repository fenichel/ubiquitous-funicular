
import { NavigationController, LineCursor } from '@blockly/keyboard-navigation';
import { Constants } from '@blockly/keyboard-navigation';
import * as Blockly from 'blockly';

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
            callback: (workspace) => {
                console.log('hello world');
                const announcer = document.getElementById('announcer');
                announcer.innerText = 'hello world';
                return true;
            },
        };

        Blockly.ShortcutRegistry.registry.register(announceShortcut);
        Blockly.ShortcutRegistry.registry.addKeyMapping(
            Blockly.utils.KeyCodes.A,
            announceShortcut.name,
        );
    }
    registerAddOns() {
        this.registerAnnounce();
    }

    // Remap to use arrow keys instead.
    remapDefaults() {
        Blockly.ShortcutRegistry.registry.removeAllKeyMappings(Constants.SHORTCUT_NAMES.OUT);
        Blockly.ShortcutRegistry.registry.addKeyMapping(Blockly.utils.KeyCodes.LEFT, Constants.SHORTCUT_NAMES.OUT);

        Blockly.ShortcutRegistry.registry.removeAllKeyMappings(Constants.SHORTCUT_NAMES.IN);
        Blockly.ShortcutRegistry.registry.addKeyMapping(Blockly.utils.KeyCodes.RIGHT, Constants.SHORTCUT_NAMES.IN);

        Blockly.ShortcutRegistry.registry.removeAllKeyMappings(Constants.SHORTCUT_NAMES.PREVIOUS);
        Blockly.ShortcutRegistry.registry.addKeyMapping(Blockly.utils.KeyCodes.UP, Constants.SHORTCUT_NAMES.PREVIOUS);

        Blockly.ShortcutRegistry.registry.removeAllKeyMappings(Constants.SHORTCUT_NAMES.NEXT);
        Blockly.ShortcutRegistry.registry.addKeyMapping(Blockly.utils.KeyCodes.DOWN, Constants.SHORTCUT_NAMES.NEXT);
    }
};