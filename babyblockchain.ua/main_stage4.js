import {Account, Form, Bulletin, Question, Answer} from './resources/js/stage3.js';
import {Operation, Transaction} from './resources/js/stage4.js';

let firstAccount = new Account(200);
let secondAccount = new Account(3000);

let bulletin = new Bulletin('Опрос от Distributed Lab Academy');
bulletin
  .addDescription('Небольшой опрос')
  .addQuestion(new Question(
    'Нравиться ли вам узнавать что-то новое вместе с нами?', 1, ["Да", "Нет"]
  ))
  .addQuestion(new Question(
    'Вы закончили универ?', 1, ["Да", "Нет"]
  ));

firstAccount.addBulletin(bulletin);
// ---------------------

let form = new Form(bulletin);
form
  .addAnswer(new Answer(
    'Нравиться ли вам узнавать что-то новое вместе с нами?', ['Да']
  ))
  .addAnswer(new Answer(
    'Вы закончили универ?', ['Да']
  ));

secondAccount.addForm(form);
//  ---------------------

let operation = secondAccount.createPublishOp(form, bulletin);
let transaction = Transaction.createTransaction([operation], '000047221649');
console.log(firstAccount);
console.log(secondAccount);
console.log(operation);
console.log("Operation verify: " + Operation.verifyOperation(operation));
console.log(transaction);
