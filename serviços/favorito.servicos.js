import fs from "fs";

function getTodosFavoritos() {
  let livros = fs.readFileSync("favoritos.json", "utf-8");
  return (livros = JSON.parse(livros));
}
function deletaFavoritoPorId(id) {
  let livros = JSON.parse(fs.readFileSync("favoritos.json", "utf-8"));
  const livrosFiltrados = livros.filter((livro) => livro.id !== Number(id));
  fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados));
}

function postFavorito(id) {
  try {
    let livros = JSON.parse(fs.readFileSync("livros.json", "utf-8"));
    let favoritos = JSON.parse(fs.readFileSync("favoritos.json", "utf-8"));

    const livrosInseridos = livros.find((livro) => livro.id === Number(id));
    const novaListaDeLivrosFavoritos = [...favoritos, livrosInseridos];
    fs.writeFileSync(
      "favoritos.json",
      JSON.stringify(novaListaDeLivrosFavoritos)
    );
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

export { getTodosFavoritos, deletaFavoritoPorId, postFavorito };
