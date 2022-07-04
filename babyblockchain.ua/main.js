import {KeyPair, Signature} from './resources/js/stage2.js';

const KEY_SIZE = 1000;
let keys = new KeyPair(KEY_SIZE); // key size: 1000
keys.printKeyPair();

document.querySelector('div.text-info').innerHTML += `<br/>Const KEY_SIZE: ${KEY_SIZE}.`;
document.querySelector('#btn')
  .addEventListener('click', () => {
    let message = document.querySelector('textarea').value;
    let signature = Signature.signData(keys.getPrivateKey(), message);
    let isVerified = Signature.verifySignature(signature, message, keys.getPublicKey());

    let alert = document.querySelector('p');
    alert.textContent = isVerified;
    if (isVerified) {
      alert.classList.remove('alert-danger');
      alert.classList.add('alert-success');
    } else {
      alert.classList.remove('alert-success');
      alert.classList.add('alert-danger');
    }
    alert.style.display = '';

    console.log({message, signature, isVerified});
  });
