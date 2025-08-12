import { Router } from "express";
import livroRouter from "./livro.rotas.js";
import favoritoRouter from "./favoritos.rotas.js";

const router = Router();
router.use(livroRouter);
router.use(favoritoRouter);
export default router;
