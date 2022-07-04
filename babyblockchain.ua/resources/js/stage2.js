import {RSA} from './rsa.js';

export class KeyPair {
  constructor(keySize) {
    let keys = RSA.generate(keySize);
    this.#privateKey = {d: keys.d, n: keys.n};
    this.publicKey = {e: keys.e, n: keys.n};
  }

  #privateKey;
  publicKey;

  getPrivateKey() {
    return this.#privateKey;
  }

  getPublicKey() {
    return this.publicKey;
  }

  static genKeyPair(keySize) {
    return new KeyPair(keySize);
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
