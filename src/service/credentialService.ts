import { User } from "@prisma/client";
import { ICredentialData } from "../types/credentialTypes";
import { conflictError } from "../utils/errorUtils";
import * as credentialRepository from "../repositories/credentialRepository";

import Cryptr from "cryptr";
import "../setup";


async function createCredential(user: User, credential: ICredentialData){
    const existingCredential = await credentialRepository.getCredentialTitle(user.id, credential.title);
    if(existingCredential) throw conflictError("Title already exists");

    const credentialPassword = credential.password;
    const credentialInfos = {...credential, password: encrypt(credentialPassword)}
    
    await credentialRepository.insertCredential(user.id, credentialInfos)
}


const cryptr = new Cryptr(process.env.CRYPTR_SECRET!);

function encrypt(value: string) {
  return cryptr.encrypt(value);
}



const credentialService = {
    createCredential
}

export default credentialService;