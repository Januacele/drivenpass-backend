import joi from "joi";
import { IWifiData } from "../types/wifiTypes";

export const safeNoteSchema = joi.object<IWifiData>({
    title: joi.string().max(50).required(),
    wifi: joi.string().required(),
    password: joi.string().required()
});