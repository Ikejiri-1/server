import {
  getLivroPorId,
  getTodosLivros,
  inserirLivro,
  modificarLivro,
  deletaLivroPorId,
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

    if (id && Number(id)) {
      const livro = getLivroPorId(id);
      res.send(livro);
    } else {
      res
        .status(422)
        .send({ error: "ID inválido, dado não condiz com o esperado" });
    }
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
    if (id && Number(id)) {
      const body = req.body;
      modificarLivro(body, id);
      res.send("livro modificado com sucesso");
    } else {
      res
        .status(422)
        .send({ error: "ID inválido, dado não condiz com o esperado" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}
function deleteLivro(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      deletaLivroPorId(id);
      res.send("livro deletado com sucesso");
    } else {
      res
        .status(422)
        .send({ error: "ID inválido, dado não condiz com o esperado" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

export { getLivros, getLivroId, postLivro, patchLivro, deleteLivro };
