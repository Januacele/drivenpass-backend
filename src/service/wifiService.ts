import { User } from "@prisma/client";
import { IWifiData } from "../types/wifiTypes";
import { encrypt } from "../utils/criptrUtils";
import * as wifiRepository from "../repositories/wifiRepository";
import { notFoundError } from "../utils/errorUtils";
import Cryptr from "cryptr";

async function createWifi(user: User, wifi: IWifiData) {
    const wifiInfos = {...wifi, password: encrypt(wifi.password)};
    await wifiRepository.insertWifi(user.id, wifiInfos);
}

async function getAllWifi(userId: number){
    const wifi = await wifiRepository.getAllWifi(userId);
    return wifi;
}

async function getOneWifi(userId: number, wifiId: number){
    const wifi = await wifiRepository.getOneWifi(userId, wifiId);
    if(!wifi) throw notFoundError("Safe note does not exist");

    const cryptr = new Cryptr(process.env.CRYPT_SECRET!);
    wifi.password = cryptr.decrypt(wifi.password);

    return wifi;
}

async function deleteWifi(user: User, wifiId: number){
    await getOneWifi(user.id, wifiId);
    await wifiRepository.deleteWifi(wifiId);
}

const wifiService = {
    createWifi,
    getAllWifi,
    getOneWifi,
    deleteWifi
}

export default wifiService;


