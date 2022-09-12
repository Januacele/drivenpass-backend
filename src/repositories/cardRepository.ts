import { prisma } from "../config/database";
import { ICardData } from "../types/cardTypes";


export async function insertCard(userId: number, card: ICardData){
    return prisma.card.create({
        data: {...card, userId}
    });
}

export async function getCardByTitle(userId: number, title: string){
    return prisma.card.findFirst({
        where: {userId, title}
    });
}

export async function getAllCards(userId: number){
    return prisma.card.findMany({
        where: {userId}
    });
}

export async function getOneCard(userId: number, cardId: number){
    return prisma.card.findFirst({
        where: {
            userId,
            id: cardId
        }
    });
}

export async function deleteCard(id: number){
    return prisma.card.delete({
        where: {id}
    });
}