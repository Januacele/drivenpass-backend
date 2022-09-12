import { Router } from "express";
import authRouter from "./authRouter";
import safeNotesRouter from "../routes/safeNotesRouter";
import credentialRouter from "../routes/credentialRouter";
import wifiRouter from "../routes/wifiRouter";
import cardRouter from "../routes/cardRouter";
const router = Router();

router.use(authRouter);
router.use(safeNotesRouter);
router.use(credentialRouter);
router.use(wifiRouter);
router.use(cardRouter);

export default router;