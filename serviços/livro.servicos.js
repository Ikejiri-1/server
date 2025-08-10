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
    livros.push(livroNovo);
    fs.writeFileSync("livros.json", JSON.stringify(livros));
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}
function modificarLivro(modificacoes, id) {
  let livrosAtuais = JSON.parse(fs.readFileSync("livros.json", "utf-8"));
  const acharIndice = livrosAtuais.findIndex(
    (livro) => livro.id === Number(id)
  );
  const conteudoModificado = {
    ...livrosAtuais[acharIndice],
    ...modificacoes,
  };
  livrosAtuais[acharIndice] = conteudoModificado;
  fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
}

export { getTodosLivros, getLivroPorId, inserirLivro, modificarLivro };
