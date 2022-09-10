import { Router } from "express";
import { jwtAutenticateMiddleware } from "../middlewares/authMiddleware";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { safeNoteSchema } from "../schemas/safeNoteSchema";
import { createSafeNote, getAllSafeNotes, getOneSafeNote } from "../controllers/safeNoteController";



const safeNotesRouter = Router();

safeNotesRouter.use(jwtAutenticateMiddleware);
safeNotesRouter.post("/safenotes", validateSchemaMiddleware(safeNoteSchema), createSafeNote );
safeNotesRouter.get("/safenotes", getAllSafeNotes);
safeNotesRouter.get("/safenotes/:id", getOneSafeNote);

export default safeNotesRouter;