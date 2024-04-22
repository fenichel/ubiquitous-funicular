
import { NavigationController, LineCursor } from '@blockly/keyboard-navigation';
import { Constants } from '@blockly/keyboard-navigation';
import * as Blockly from 'blockly';

export class ExtendedNavigationController extends NavigationController {
    // override
    /**
      * Registers the default keyboard shortcuts for keyboard navigation.
      * @public
      */
    init() {
        this.addShortcutHandlers();
        this.registerDefaults();
        this.remapDefaults();
        this.registerAddOns();
    }
    /**
   * Keyboard shortcut to move the cursor on the workspace down when in
   * keyboard navigation mode.
   * @protected
   */
    registerAnnounce() {
        /** @type {!Blockly.ShortcutRegistry.KeyboardShortcut} */
        const announceShortcut = {
            name: 'Announce',
            preconditionFn: (workspace) => {
                return (true
                );
            },
            callback: (workspace) => {
                console.log('hello world');
                return true;
            },
        };

        Blockly.ShortcutRegistry.registry.register(announceShortcut);
        // const shiftW = Blockly.ShortcutRegistry.registry.createSerializedKey(
        //     Blockly.utils.KeyCodes.S,
        //     [Blockly.utils.KeyCodes.SHIFT],
        // );
        Blockly.ShortcutRegistry.registry.addKeyMapping(
            Blockly.utils.KeyCodes.A,
            announceShortcut.name,
        );
    }
    registerAddOns() {
        this.registerAnnounce();
    }

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