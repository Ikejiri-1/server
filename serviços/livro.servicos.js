import fs from "fs";

function getTodosLivros() {
  let livros = fs.readFileSync("livros.json", "utf-8");
  return (livros = JSON.parse(livros));
}
function getLivroPorId(id) {
  let livro = fs.readFileSync("livros.json", "utf-8");
  livro = JSON.parse(livro);
  const livroFiltrado = livro.filter((livro) => livro.id === id)[0];
  return livroFiltrado;
}

export { getTodosLivros, getLivroPorId };
