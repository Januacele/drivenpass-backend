import { User } from "@prisma/client";
import Cryptr from "cryptr";
import { ICredentialData } from "../types/credentialTypes";
import { conflictError } from "../utils/errorUtils";
import * as credentialRepository from "../repositories/credentialRepository";


import "../setup";


async function createCredential(user: User, credential: ICredentialData){
    const existingCredential = await credentialRepository.getCredentialTitle(user.id, credential.title);
    if(existingCredential) throw conflictError("Title already exists");

    const credentialPassword = credential.password;
    const cryptr = new Cryptr(process.env.CRYPTR_SECRET!);
    const encryptedPassword = cryptr.encrypt(credentialPassword);
    const credentialInfos = {...credential, password: encryptedPassword}

    await credentialRepository.insertCredential(user.id, credentialInfos)
}





const credentialService = {
    createCredential
}

export default credentialService;