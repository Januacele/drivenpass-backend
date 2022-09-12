import Cryptr from "cryptr";
import "../setup";

const cryptr = new Cryptr(process.env.CRYPT_SECRET!);

export function encrypt(value: string) {
  return cryptr.encrypt(value);
}

export function decrypt(encryptedValue: string) {;
  return cryptr.decrypt(encryptedValue);
}