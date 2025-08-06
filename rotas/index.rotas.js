import { Router } from "express";
import livroRouter from "./livro.rotas.js";

const router = Router();
router.use(livroRouter);

export default router;
