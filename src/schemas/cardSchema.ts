import joi from "joi";
import { ICardData } from "../types/cardTypes";

export const cardSchema = joi.object<ICardData>({
    title: joi.string().max(50).required(),
    number: joi.string().required(),
    cardHolderName: joi.string().required(),
    securityCode: joi.string().max(3),
    expirationDate: joi.string().required(),
    password: joi.string().required(),
    isVirtual: joi.boolean().required(), 
    type: joi.string().required()
});