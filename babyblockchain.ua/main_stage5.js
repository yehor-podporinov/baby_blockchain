import {Account, Form, Bulletin, Question, Answer} from './resources/js/stage3.js';
import {Operation, Transaction} from './resources/js/stage4.js';
import {Block, Blockchain} from './resources/js/stage5.js';

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

console.log('-------------------------------STAGE 5--------------------------------------')
let blockchain = Blockchain.initBlockchain();
console.log(blockchain);

let new_block = new Block([transaction], '74f97f26cd5cf69e4b385d2dcf5e62502c2cc022');
console.log(new_block);

console.log(blockchain.validateBlock(new_block)); // returns result of a push
console.log(blockchain);

let transaction_2 = Transaction.createTransaction([operation], '000047221650');
let transaction_3 = Transaction.createTransaction([operation], '000047221651');
let transaction_4 = Transaction.createTransaction([operation], '000047221652');
let transaction_5 = Transaction.createTransaction([operation], '000047221653');
let transaction_6 = Transaction.createTransaction([operation], '000047221654');
let transaction_7 = Transaction.createTransaction([operation], '000047221655');
let transaction_8 = Transaction.createTransaction([operation], '000047221656');
let transaction_9 = Transaction.createTransaction([operation], '000047221657');
let transaction_10 = Transaction.createTransaction([operation], '000047221658');
let transaction_11 = Transaction.createTransaction([operation], '000047221659');
let transaction_12 = Transaction.createTransaction([operation], '000047221660');
let transaction_13 = Transaction.createTransaction([operation], '000047221661');
let transaction_14 = Transaction.createTransaction([operation], '000047221662');
let transaction_15 = Transaction.createTransaction([operation], '000047221663');
let transaction_16 = Transaction.createTransaction([operation], '000047221664');
let transaction_17 = Transaction.createTransaction([operation], '000047221665');
let transaction_18 = Transaction.createTransaction([operation], '000047221666');
let transaction_19 = Transaction.createTransaction([operation], '000047221667');
let transaction_20 = Transaction.createTransaction([operation], '000043456128');
let transaction_21 = Transaction.createTransaction([operation], '000047221650');

let new_block_2 = new Block([transaction_2, transaction_3], new_block.blockID);
let new_block_3 = new Block([transaction_4, transaction_5], new_block_2.blockID);
let new_block_4 = new Block([transaction_6, transaction_7], new_block_3.blockID);
let new_block_5 = new Block([transaction_8, transaction_9], new_block_4.blockID);
let new_block_6 = new Block([transaction_10, transaction_11], new_block_5.blockID);
let new_block_7 = new Block([transaction_12, transaction_13], new_block_6.blockID);
let new_block_8 = new Block([transaction_14, transaction_15], new_block_7.blockID);
let new_block_9 = new Block([transaction_16, transaction_17], new_block_8.blockID);
let new_block_10 = new Block([transaction_18, transaction_19], new_block_9.blockID);
let new_block_11 = new Block([transaction_20, transaction_21], new_block_10.blockID);

console.log(blockchain.validateBlock(new_block_2)); // returns result of a push
console.log(blockchain.validateBlock(new_block_3)); // returns result of a push
console.log(blockchain.validateBlock(new_block_4)); // returns result of a push
console.log(blockchain.validateBlock(new_block_5)); // returns result of a push
console.log(blockchain.validateBlock(new_block_6)); // returns result of a push
console.log(blockchain.validateBlock(new_block_7)); // returns result of a push
console.log(blockchain.validateBlock(new_block_8)); // returns result of a push
console.log(blockchain.validateBlock(new_block_9)); // returns result of a push
console.log(blockchain.validateBlock(new_block_10)); // returns result of a push
console.log(blockchain.validateBlock(new_block_11)); // returns result of a push

console.log(blockchain);
