import { Router } from "express";
import authRouter from "./authRouter";
import safeNotesRouter from "../routes/safeNotesRouter";
import credentialRouter from "../routes/credentialRouter";
import wifiRouter from "../routes/wifiRouter";

const router = Router();

router.use(authRouter);
router.use(safeNotesRouter);
router.use(credentialRouter);
router.use(wifiRouter);

export default router;