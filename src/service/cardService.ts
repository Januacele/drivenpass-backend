import { ICardData } from "../types/cardTypes";
import { User } from "@prisma/client";
import * as cardRepository from "../repositories/cardRepository";
import { conflictError, notFoundError } from "../utils/errorUtils"; 
import { encrypt, decrypt } from "../utils/criptrUtils";

async function createCard(user: User, card: ICardData) {
   
    const existingCard = await cardRepository.getCardByTitle(user.id, card.title);
    if(existingCard) throw conflictError("Title already in use");
  
    const cardInfos: ICardData = {
      ...card, 
      password: encrypt(card.password),
      securityCode: encrypt(card.securityCode)
    }
  
    await cardRepository.insertCard(user.id, cardInfos);
}

async function getAllCards(userId: number) {
    const cards = await cardRepository.getAllCards(userId);
    return cards.map(card => {
      return {
        ...card, 
        password: decrypt(card.password),
        securityCode: decrypt(card.securityCode)
      }
    })
  }

  async function getOneCard(userId: number, cardId: number) {
    const card = await cardRepository.getOneCard(userId, cardId);
    if(!card) throw notFoundError("Safe note does not exist");

    return {
        ...card,
        password: decrypt(card.password),
        securityCode: decrypt(card.securityCode)
      }
  }

  async function deleteCard(user: User, cardId: number) {
    await getOneCard(user.id, cardId);
    await cardRepository.deleteCard(cardId);
  }

const cardService = {
    createCard,
    getAllCards,
    getOneCard,
    deleteCard
}

export default cardService;