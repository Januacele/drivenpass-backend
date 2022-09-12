import { Router } from "express";
import { jwtAutenticateMiddleware } from "../middlewares/authMiddleware";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { cardSchema } from "../schemas/cardSchema";
import { createCard, getAllCards } from "../controllers/cardController";

const cardRouter = Router();

cardRouter.use(jwtAutenticateMiddleware);
cardRouter.post("/card", validateSchemaMiddleware(cardSchema), createCard);
cardRouter.get("/card", getAllCards);
cardRouter.get("/card/:id", );
cardRouter.delete("/card/:id", );

export default cardRouter;