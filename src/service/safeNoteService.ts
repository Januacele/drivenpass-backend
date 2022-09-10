import { User } from "@prisma/client";
import * as safeNoteRepository from "../repositories/safeNoteRepository";
import { ISafeNoteData } from "../types/safeNoteTypes";
import { conflictError } from "../utils/errorUtils";



async function createSafeNote(user: User, safeNote: ISafeNoteData){
    const existingCredential = await safeNoteRepository.getSafeNoteByTitle(user.id, safeNote.title);
    if(existingCredential) throw conflictError("Title already exists");

    await safeNoteRepository.insertSafeNote(user.id, safeNote);
}



const safeNoteService = {
    createSafeNote
}

export default safeNoteService;