import { getLivroPorId, getTodosLivros } from "../serviços/livro.servicos.js";

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

export { getLivros, getLivroId };
