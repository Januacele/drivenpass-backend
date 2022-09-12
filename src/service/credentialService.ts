import { User } from "@prisma/client";
import Cryptr from "cryptr";
import { ICredentialData } from "../types/credentialTypes";
import { conflictError, notFoundError } from "../utils/errorUtils";
import * as credentialRepository from "../repositories/credentialRepository";


import "../setup";
import { decrypt } from "../utils/criptrUtils";


async function createCredential(user: User, credential: ICredentialData){
    console.log(process.env.CRYPT_SECRET);
    const existingCredential = await credentialRepository.getCredentialTitle(user.id, credential.title);
    if(existingCredential) throw conflictError("Title already exists");

    const credentialPassword = credential.password;
    const cryptr = new Cryptr(process.env.CRYPT_SECRET!);
   
    const encryptedPassword = cryptr.encrypt(credentialPassword);
    const credentialInfos = {...credential, password: encryptedPassword}

    await credentialRepository.insertCredential(user.id, credentialInfos)
}


async function getAllCredential(userId: number){
    const credential = await credentialRepository.getAllCredential(userId);
    return credential.map(credential => {
        const { password } = credential;
        return { ...credential, password: decrypt(password)}
    });
}


async function getOneCredential(userId: number, credentialId: number){
    const credential = await credentialRepository.getOneCredential(userId, credentialId);
    if(!credential) throw notFoundError("Safe note does not exist");

    return {
        ...credential,
        password: decrypt(credential.password)
    }
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