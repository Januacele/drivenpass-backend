import { Router } from "express";
import authRouter from "./authRouter";
import safeNotesRouter from "../routes/safeNotesRouter";
import credentialRouter from "../routes/credentialRouter";

const router = Router();

router.use(authRouter);
router.use(safeNotesRouter);
router.use(credentialRouter)

export default router;