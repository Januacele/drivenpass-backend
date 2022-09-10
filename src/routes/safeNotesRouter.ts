import { Router } from "express";
import { jwtAutenticateMiddleware } from "../middlewares/authMiddleware";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { safeNoteSchema } from "../schemas/safeNoteSchema";
import { createSafeNote } from "../controllers/safeNoteController";



const safeNotesRouter = Router();

safeNotesRouter.use(jwtAutenticateMiddleware);
safeNotesRouter.post("/safenotes", validateSchemaMiddleware(safeNoteSchema), createSafeNote );


export default safeNotesRouter;