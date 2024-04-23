import { LineCursor } from '@blockly/keyboard-navigation';

export class ExtendedLineCursor extends LineCursor {

}

export function installCursor(markerManager) {
    const oldCurNode = markerManager.getCursor().getCurNode();
    const lineCursor = new ExtendedLineCursor();
    markerManager.setCursor(lineCursor);
    if (oldCurNode) {
        markerManager.getCursor().setCurNode(oldCurNode);
    }
}