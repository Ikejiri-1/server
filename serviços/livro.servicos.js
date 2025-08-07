import fs from "fs";

function getTodosLivros() {
  let livros = fs.readFileSync("livros.json", "utf-8");
  return (livros = JSON.parse(livros));
}
function getLivroPorId(id) {
  let listaLivros = fs.readFileSync("livros.json", "utf-8");
  listaLivros = JSON.parse(listaLivros);
  const livroFiltrado = listaLivros.filter((livro) => {
    return Number(livro.id) === Number(id);
  })[0];
  console.log(livroFiltrado);
  return livroFiltrado;
}

function inserirLivro(livroNovo) {
  try {
    let livros = JSON.parse(fs.readFileSync("livros.json", "utf-8"));
    const novaListaDeLivros = [...livros, livroNovo];
    console.log(novaListaDeLivros);
    return fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
  } catch (err) {
    console.log(err);
  }
}

export { getTodosLivros, getLivroPorId, inserirLivro };
