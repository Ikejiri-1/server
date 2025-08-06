import { Router } from "express";
import { getLivros, getLivroId } from "../controladores/livro.controle.js";
const livroRouter = Router();

livroRouter.get("/", getLivros);

livroRouter.get("/livros/:id", getLivroId);

livroRouter.post("/livros", (req, res) => {
  res.send("Você fez um post");
});
livroRouter.put("/livros", (req, res) => {
  res.send("voce fez um put");
});
livroRouter.patch("/livros", (req, res) => {
  res.send("voce fez um patch");
});
livroRouter.delete("/livros", (req, res) => {
  res.send("voce fez um delete");
});

export default livroRouter;
