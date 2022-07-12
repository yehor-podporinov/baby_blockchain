import {Account} from './stage3.js';
import {SHA1} from './sha1.js';
import {Signature} from './stage2.js'

export class Operation {
  constructor(senderID, form, bulletin, signature, sendersPublicKey) {
    this.senderID = senderID;
    this.form = form;
    this.bulletin = bulletin;
    this.signature = signature;
    this.sendersPublicKey = sendersPublicKey;
  }

  senderID;
  form; // :Form
  bulletin // :Bulletin
  signature;
  sendersPublicKey;

  static createOperation(senderID, form, bulletin, signature, sendersPublicKey) {
    return new Operation(...arguments);
  }

  static verifyOperation(operation) {
    let hasSendersVerify =
      operation.senderID == SHA1(JSON.stringify(operation.sendersPublicKey)) ?
        true : false;
    if (!hasSendersVerify) return false;

    let hasSignatureVerify = Signature
      .verifySignature(operation.signature, JSON.stringify(operation.form),
        operation.sendersPublicKey);
    if (!hasSignatureVerify) return false;

    let hasCorrectBulletin =
      operation.form.bulletinHash == SHA1(JSON.stringify(operation.bulletin)) ?
        true : false;
    if (!hasCorrectBulletin) return false;

    let hasAllAnswers =
      operation.form.answers.length == operation.bulletin.questions.length ?
        true : false;
    if (!hasAllAnswers) return false;

    for (let i = 0; i < operation.form.answers.length; i++) {
      if (operation.form.answers[i].questionTitle
              != operation.bulletin.questions[i].title
        || operation.form.answers[i].answersVariants.length
              > operation.bulletin.questions[i].answersCountLimit
      ) return false;

      for (let j = 0; j < operation.form.answers[i].answersVariants.length; j++)
        if (!operation.bulletin.questions[i].answersVariants
                .includes(operation.form.answers[i].answersVariants[j]))
          return false;
    }

    if (hasSendersVerify
      && hasSignatureVerify
      && hasCorrectBulletin
      && hasAllAnswers
    ) return true;
  }
}

export class Transaction {
  constructor(setOfOperations, index) {
    this.setOfOperations = setOfOperations;
    this.index = index;
    this.transactionID = SHA1(JSON.stringify(setOfOperations) + index);
  }

  transactionID;
  setOfOperations = []; // <Operation>
  index;

  static createTransaction(setOfOperations, index) {
    return new Transaction(...arguments);
  }
}
