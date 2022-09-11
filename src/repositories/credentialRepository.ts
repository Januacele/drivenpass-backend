import { prisma } from "../config/database";
import { ICredentialData } from "../types/credentialTypes";


export async function insertCredential(userId: number, credential: ICredentialData){
    return prisma.credential.create({
        data: {...credential, userId}
    });
}


export async function getCredentialTitle(userId: number, title: string){
    return prisma.credential.findFirst({
        where: {
            userId,
            title
        }
    });
}