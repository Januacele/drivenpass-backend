import joi from "joi";
import { ISafeNoteData } from "../types/safeNoteTypes";

export const safeNoteSchema = joi.object<ISafeNoteData>({
    title: joi.string().max(50).required(),
    note: joi.string().max(1000).required()
});

