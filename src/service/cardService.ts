import { ICardData } from "../types/cardTypes";
import { User } from "@prisma/client";
import * as cardRepository from "../repositories/cardRepository";
import { conflictError } from "../utils/errorUtils"; 
import { encrypt } from "../utils/criptrUtils";

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


const cardService = {
    createCard,
}

export default cardService;