import { User } from "@prisma/client";
import * as safeNoteRepository from "../repositories/safeNoteRepository";
import { ISafeNoteData } from "../types/safeNoteTypes";
import { conflictError, notFoundError } from "../utils/errorUtils";



async function createSafeNote(user: User, safeNote: ISafeNoteData){
    const existSafeNote = await safeNoteRepository.getSafeNoteByTitle(user.id, safeNote.title);
    if(existSafeNote) throw conflictError("Title already exists");

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

async function deleteSafeNote(user: User, safeNoteId: number){
    await getOneSafeNote(user.id, safeNoteId);
    await safeNoteRepository.deleteSafeNotes(safeNoteId);

}

const safeNoteService = {
    createSafeNote,
    getAllSafeNotes,
    getOneSafeNote,
    deleteSafeNote
}

export default safeNoteService;