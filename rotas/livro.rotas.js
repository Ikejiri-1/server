import { Router } from "express";
import {
  getLivros,
  getLivroId,
  postLivro,
  patchLivro,
} from "../controladores/livro.controle.js";
const livroRouter = Router();

livroRouter.get("/livros", getLivros);

livroRouter.get("/livros/:id", getLivroId);

livroRouter.post("/livros", postLivro);

livroRouter.patch("/livros/:id", patchLivro);
livroRouter.put("/livros", (req, res) => {
  res.send("voce fez um put");
});
livroRouter.delete("/livros", (req, res) => {
  res.send("voce fez um delete");
});

export default livroRouter;
