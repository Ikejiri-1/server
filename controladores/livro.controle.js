import {
  getLivroPorId,
  getTodosLivros,
  inserirLivro,
  modificarLivro,
} from "../serviços/livro.servicos.js";

function getLivros(req, res) {
  try {
    let livros = getTodosLivros();
    res.send(livros);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}
function getLivroId(req, res) {
  try {
    const id = req.params.id;
    const livro = getLivroPorId(id);
    res.send(livro);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

function postLivro(req, res) {
  try {
    const livroNovo = req.body;
    inserirLivro(livroNovo);
    res.status(201).send("livro inserido com sucesso");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

function patchLivro(req, res) {
  try {
    const id = req.params.id;
    const body = req.body;
    modificarLivro(body, id);
    res.send("livro modificado com sucesso");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}
export { getLivros, getLivroId, postLivro, patchLivro };
