import {KeyPair, Signature} from './stage2.js';
import {SHA1} from './sha1.js'
//import {Operation} from './stage4.js';

export class Account {
  constructor(keySize) {
    let keyPair = KeyPair(keySize);
    this.accountID = SHA1(keyPair.getPublicKey());
    this.accountKeyPair = keyPair;
  }

  accountID;
  accountKeyPair;
  forms = [];
  bulletins = [];

  static genAccount(keySize) {
    return new Account(keySize);
  }

  addBulletin(bulletin) {
    this.bulletins.push(bulletin);
  }

  newForm(form) {
    this.forms.push(form);
  }

  getForm(index) {
    return this.forms[index];
  }

  createVoteOp(recipient, form) {
    // Класс Operation будет реализовываться на след. этапе
    /*
    let arrayData = [this, recipent, form];
    let signature = Signature.signData(this.accountKeyPair.getPrivateKey(), JSON.stringify(arrayData));
    retuurn new Operation(this, recipient, form, signature);
    */
  }

  printForm(index) {
    console.log(this.forms[index]);
  }

  printBulletin(index) {
    console.log(this.bulletins[index]);
  }

  signData(keyPair, message) {
    return Signature.signData(message, this.accountKeyPair.getPrivateKey());
  }

  print() {
    console.log(this);
  }
}

class Form {
  constructor(bulletin) {
    this.bulletinHash = SHA1(JSON.stringify(bulletin));
  }

  answers;

  addAnswer(answerObject) {
    answers.push(answerObject);
  }
}

class Bulletin {
  constructor(name) {
    this.name = name;
  }

  addQuestion(questionObject) {
    qustions.push(questionObject);
  }

  name;
  description;
  questions;
}

class Question {
  constructor(title, answersCountLimit, answersVariants) {
    this.title = title;
    this.answersCountLimit = answersCountLimit; // 1,2,3,4,5...
    this.answersVariants = answersVariants; // array of answers variants
  }
}

class Answer {
  constructor(questionTitle, answersVariants) {
    this.questionTitle = questionTitle;
    this.answersVariants = answersVariants; // array of your answers
  }
}
