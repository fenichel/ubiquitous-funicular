import { LineCursor } from '@blockly/keyboard-navigation';
import { ASTNode } from 'blockly';

export class ExtendedLineCursor extends LineCursor {

    nextSibling() {
        const curNode = this.getCurNode();
        if (!curNode) {
          return null;
        }
        let newNode = null;
        switch (curNode.type) {
          case ASTNode.types.STACK: {
            newNode = curNode.navigateBetweenStacks(true);
            break;
          }
          default: {
            const block = curNode.getSourceBlock();
            const nextBlock = block.getNextBlock();
            newNode = ASTNode.createBlockNode(nextBlock);
            break;
          }
        }
    
        if (newNode) {
          this.setCurNode(newNode);
        }
        return newNode;
      }
    
}

export function installCursor(markerManager) {
    const oldCurNode = markerManager.getCursor().getCurNode();
    const lineCursor = new ExtendedLineCursor();
    markerManager.setCursor(lineCursor);
    if (oldCurNode) {
        markerManager.getCursor().setCurNode(oldCurNode);
    }
}