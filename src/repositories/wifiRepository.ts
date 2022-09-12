import { prisma } from "../config/database";
import { IWifiData } from "../types/wifiTypes";


export async function insertWifi(userId: number, wifi: IWifiData){
    return prisma.wifi.create({
        data: {...wifi, userId}
    });
}

export async function getAllWifi(userId: number){
    return prisma.wifi.findMany({
        where : {userId}
    });
}