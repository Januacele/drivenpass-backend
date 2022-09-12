import { User } from "@prisma/client";
import Cryptr from "cryptr";
import { ICredentialData } from "../types/credentialTypes";
import { conflictError, notFoundError } from "../utils/errorUtils";
import * as credentialRepository from "../repositories/credentialRepository";
import { encrypt, decrypt } from "../utils/criptrUtils";
import "../setup";




async function createCredential(user: User, credential: ICredentialData){
    const existingCredential = await credentialRepository.getCredentialTitle(user.id, credential.title);
    if(existingCredential) throw conflictError("Title already exists");

    const credentialInfos: ICredentialData = {
        ...credential, 
        password: encrypt(credential.password),
      }

    await credentialRepository.insertCredential(user.id, credentialInfos)
}


async function getAllCredential(userId: number) {
  const credentials = await credentialRepository.getAllCredential(userId);
  return credentials.map(credential => {
    return {
      ...credential, 
      password: decrypt(credential.password),
    }
  })
}


async function getOneCredential(userId: number, credentialId: number){
    const credential = await credentialRepository.getOneCredential(userId, credentialId);
    if(!credential) throw notFoundError("Safe note does not exist");

    const cryptr = new Cryptr(process.env.CRYPT_SECRET!);
    credential.password = cryptr.decrypt(credential.password);

    return credential;
}

async function deleteCredential(user: User, credentialId: number){
    await getOneCredential(user.id, credentialId);
    await credentialRepository.deleteCredential(credentialId);
}


const credentialService = {
    createCredential,
    getAllCredential,
    getOneCredential,
    deleteCredential
}

export default credentialService;