import { Router } from "express";
import {
  getLivros,
  getLivroId,
  postLivro,
  patchLivro,
  deleteLivro,
} from "../controladores/livro.controle.js";

const livroRouter = Router();

livroRouter.get("/livros", getLivros);

livroRouter.get("/livros/:id", getLivroId);

livroRouter.post("/livros", postLivro);

livroRouter.patch("/livros/:id", patchLivro);

livroRouter.delete("/livros/:id", deleteLivro);

livroRouter.put("/livros", (req, res) => {
  res.send("voce fez um put");
});

export default livroRouter;
