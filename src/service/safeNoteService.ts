import { User } from "@prisma/client";
import * as safeNoteRepository from "../repositories/safeNoteRepository";
import { ISafeNoteData } from "../types/safeNoteTypes";
import { conflictError, notFoundError } from "../utils/errorUtils";



async function createSafeNote(user: User, safeNote: ISafeNoteData){
    const existingCredential = await safeNoteRepository.getSafeNoteByTitle(user.id, safeNote.title);
    if(existingCredential) throw conflictError("Title already exists");

    await safeNoteRepository.insertSafeNote(user.id, safeNote);
}

async function getAllSafeNotes(userId: number){
    const safeNotes = await safeNoteRepository.getAllSafeNotes(userId);
    return safeNotes;
}

async function getOneSafeNote(userId: number, safeNoteId: number){
    const safeNote = await safeNoteRepository.getOneSafeNote(userId, safeNoteId);
    if(!safeNote) throw notFoundError("Safe note does not exist");

    return safeNote;
}

const safeNoteService = {
    createSafeNote,
    getAllSafeNotes,
    getOneSafeNote
}

export default safeNoteService;