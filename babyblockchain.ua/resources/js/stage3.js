import {KeyPair, Signature} from './stage2.js';
import {SHA1} from './sha1.js'
import {Operation} from './stage4.js';

export class Account {
  constructor(keySize) {
    let keyPair = new KeyPair(keySize);
    this.accountID = SHA1(JSON.stringify(keyPair.getPublicKey()));
    this.accountKeyPair = keyPair;
  }

  accountID;
  accountKeyPair;
  forms = [];
  bulletins = [];

  addBulletin(bulletin) {
    this.bulletins.push(bulletin);
  }

  addForm(form) {
    this.forms.push(form);
  }

  createPublishOp(form, bulletin) {
    let signature = Signature.signData(this.accountKeyPair.getPrivateKey(),
      JSON.stringify(form));

    return new Operation(this.accountID, form, bulletin, signature,
      this.accountKeyPair.getPublicKey());
  }
}

export class Form {
  constructor(bulletin) {
    this.bulletinHash = SHA1(JSON.stringify(bulletin));
  }

  bulletinHash;
  answers = [];

  addAnswer(answerObject) {
    this.answers.push(answerObject);
    return this;
  }
}

export class Bulletin {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  addQuestion(questionObject) {
    this.questions.push(questionObject);
    return this;
  }

  addDescription(description) {
    this.description = description;
    return this;
  }

  name;
  description;
  questions = [];
}

export class Question {
  constructor(title, answersCountLimit, answersVariants) {
    this.title = title;
    this.answersCountLimit = answersCountLimit; // 1,2,3,4,5...
    this.answersVariants = answersVariants; // array of answers variants
  }

  title;
  answersCountLimit;
  answersVariants = [];
}

export class Answer {
  constructor(questionTitle, answersVariants) {
    this.questionTitle = questionTitle;
    this.answersVariants = answersVariants;
  }

  questionTitle;
  answersVariants = [];
}
