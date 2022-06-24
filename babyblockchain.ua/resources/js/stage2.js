import {RSA} from './rsa.js';

export class KeyPair {
  constructor(keySize) {
    this.genKeyPair(keySize);
  }

  #privateKey;
  publicKey;

  getPrivateKey() {
    return this.#privateKey;
  }

  getPublicKey() {
    return this.publicKey;
  }

  genKeyPair(keySize) {
    let keys = RSA.generate(keySize);
    this.#privateKey = {d: keys.d, n: keys.n};
    this.publicKey = {e: keys.e, n: keys.n};
  }

  printKeyPair() {
    console.log(this);
  }
}

export class Signature {
  static signData(privateKey, message) {
    return RSA.sign(RSA.encode(message), privateKey.d, privateKey.n);
  }

  static verifySignature(signature, message, publicKey) {
    return RSA.verify(signature, RSA.encode(message), publicKey.e, publicKey.n);
  }
}
