import { Router } from "express";
import { jwtAutenticateMiddleware } from "../middlewares/authMiddleware";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { cardSchema } from "../schemas/cardSchema";

const cardRouter = Router();

cardRouter.use(jwtAutenticateMiddleware);
cardRouter.post("/card", validateSchemaMiddleware(cardSchema), );
cardRouter.get("/card", );
cardRouter.get("/card/:id", );
cardRouter.delete("/card/:id", );

export default cardRouter;