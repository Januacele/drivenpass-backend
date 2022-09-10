import { Router } from "express";
import authRouter from "./authRouter";
import safeNotesRouter from "../routes/safeNotesRouter";

const router = Router();

router.use(authRouter);
router.use(safeNotesRouter);

export default router;