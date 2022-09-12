import { User } from "@prisma/client";
import { IWifiData } from "../types/wifiTypes";
import { encrypt } from "../utils/criptrUtils";
import * as wifiRepository from "../repositories/wifiRepository";


async function createWifi(user: User, wifi: IWifiData) {
    const wifiInfos = {...wifi, password: encrypt(wifi.password)};
    await wifiRepository.insertWifi(user.id, wifiInfos);
}

async function getAllWifi(userId: number){
    const wifi = await wifiRepository.getAllWifi(userId);
    return wifi;
}

const wifiService = {
    createWifi,
    getAllWifi
}

export default wifiService;


