import {
  getTodosFavoritos,
  inserirFavorito,
  deletaFavoritoPorId,
} from "../servicos/favoritos.servicos.js";

function getFavoritos(req, res) {
  try {
    let livros = getTodosFavoritos();
    res.send(livros);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}
function postFavorito(req, res) {
  try {
    const id = req.params.id;
    inserirFavorito(id);
    res.status(201).send("Favorito inserido com sucesso");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}
function deleteFavorito(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      deletaFavoritoPorId(id);
      res.send("Favorito deletado com sucesso");
    } else {
      res
        .status(422)
        .send({ error: "ID inválido, dado não condiz com o esperado" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}
export { getFavoritos, postFavorito, deleteFavorito };
