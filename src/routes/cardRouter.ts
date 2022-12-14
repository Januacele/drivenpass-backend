import { Router } from "express";
import { jwtAutenticateMiddleware } from "../middlewares/authMiddleware";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { cardSchema } from "../schemas/cardSchema";
import { createCard, getAllCards, getOneCard, deleteCard } from "../controllers/cardController";

const cardRouter = Router();

cardRouter.use(jwtAutenticateMiddleware);
cardRouter.post("/card", validateSchemaMiddleware(cardSchema), createCard);
cardRouter.get("/card", getAllCards);
cardRouter.get("/card/:id", getOneCard);
cardRouter.delete("/card/:id", deleteCard);

export default cardRouter;