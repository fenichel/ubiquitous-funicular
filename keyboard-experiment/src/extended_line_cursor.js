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
          case ASTNode.types.WORKSPACE: {
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
    
      previousSibling() {
    
        const curNode = this.getCurNode();
        if (!curNode) {
          return null;
        }
        let newNode = null;
        switch (curNode.type) {
          case ASTNode.types.STACK: {
            newNode = curNode.navigateBetweenStacks(false);
            break;
          }
          case ASTNode.types.WORKSPACE: {
            break;
          }
          default: {
            const block = curNode.getSourceBlock();
            // TODO: Decide what this should do if the source block is
            // the first block inside a statement input.
            // TODO: Decide what this should do if the source block
            // has an output instead of a previous.
            const prevBlock = block.getPreviousBlock();
            newNode = ASTNode.createBlockNode(prevBlock);
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