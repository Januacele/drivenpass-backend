import joi from "joi";
import { ICredentialData } from "../types/credentialTypes";

export const safeNoteSchema = joi.object<ICredentialData>({
    title: joi.string().max(50).required(),
    url: joi.string().required(),
    username: joi.string().required(),
    password: joi.string().required()
});