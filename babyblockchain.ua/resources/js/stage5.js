import {Operation, Transaction} from './stage4.js';
import {SHA1} from './sha1.js';

export class Block {
  constructor(setOfTransactions, prevHash) {
    this.setOfTransactions = setOfTransactions;
    this.prevHash = prevHash;
    this.blockID = SHA1(JSON.stringify(setOfTransactions) + prevHash);
  }

  blockID;
  prevHash;
  setOfTransactions = [];

  static createBlock(setOfTransactions, prevHash) {
    return new Block(setOfTransactions, prevHash)
  }
}

export class Blockchain {
  constructor(setOfTransactions) {
    this.blockHistory.push(new Block(setOfTransactions, null));
    this.txDatabase.push(setOfTransactions);
  }

  blockHistory = [];
  txDatabase = [];

  static initBlockchain() {
    return new Blockchain(new Transaction(null, '0000'));
  }

  validateBlock(block) {
    let lastBlock = this.blockHistory[this.blockHistory.length - 1];
    if (block.prevHash != lastBlock.blockID)
      return false;

    for (let i = 0; i < block.setOfTransactions.length; i++) {
      let tx = block.setOfTransactions[i];
      let isIntegrity =
        tx.transactionID == SHA1(JSON.stringify(tx.setOfOperations) + tx.index) ?
          true : false;
      if (!isIntegrity) return false;

      let isExist = this.txDatabase.find(existTx => existTx.transactionID == tx.transactionID);
      if (isExist) return false;

      for(let j = 0; j < tx.setOfOperations.length; j++) {
        let isValidOp = Operation
          .verifyOperation(tx.setOfOperations[j])
        if (!isValidOp) return false;
      }
    }

    this.blockHistory.push(block);
    this.txDatabase.push(...block.setOfTransactions)
    return true;
  }
}
