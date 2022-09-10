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

export async function getAllSafeNotes(userId: number){
    return prisma.safeNote.findMany({
        where: {userId}
    });
}


export async function getOneSafeNote(userId: number, safeNoteId: number){
    return prisma.safeNote.findFirst({
        where:{
            userId: userId,
            id: safeNoteId
        }
    });
}

export async function deleteSafeNotes(id: number){
    return prisma.safeNote.delete({
        where: {id}
    });
}