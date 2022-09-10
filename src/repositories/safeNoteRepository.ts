import { prisma } from "../config/database";
import { ISafeNoteData } from "../types/safeNoteTypes";


export async function insertSafeNote(userId: number, safeNote: ISafeNoteData){
    return prisma.safeNote.create({
        data: {...safeNote, userId}
    });
}

export async function getSafeNoteByTitle(userId: number, title: string){
    return prisma.safeNote.findFirst({
        where: { userId, title }
    })
}