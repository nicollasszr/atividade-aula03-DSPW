// Arquivo: atividade.js (Versão com as respostas)

// 1. Importando o array de livros da nossa "base de dados"
const livros = require('./biblioteca');

// ------------------------------------------------------------------------
// ATIVIDADE 1: Encontrar livros de um gênero específico
//
// Crie uma função (modelo tradicional) que aceite um gênero como parâmetro
// e retorne um novo array com todos os livros desse gênero.
// ------------------------------------------------------------------------

function encontrarLivrosPorGenero(genero) {
  // Usamos o método filter para criar um novo array
  // contendo apenas os livros que passam na condição.
  const livrosFiltrados = livros.filter(function (livro) {
    return livro.genero === genero;
  });
  return livrosFiltrados;
}

// Teste da Atividade 1
console.log('--- Atividade 1: Livros de Ficção Científica (Função Tradicional) ---');
const livrosDeFiccao = encontrarLivrosPorGenero('Ficção Científica');
console.log(livrosDeFiccao);


// ------------------------------------------------------------------------
// ATIVIDADE 2: Refatorando com Arrow Function
//
// Faça a mesma função da Atividade 1, mas agora usando Arrow Function.
// ------------------------------------------------------------------------

const encontrarLivrosPorGeneroArrow = (genero) => {
  // A lógica é a mesma, mas a sintaxe da função é mais enxuta.
  // Como temos apenas uma linha de retorno, podemos omitir as chaves {} e a palavra 'return'.
  return livros.filter(livro => livro.genero === genero);
};

// Teste da Atividade 2
console.log('\n--- Atividade 2: Livros de Distopia (Arrow Function) ---');
const livrosDeDistopia = encontrarLivrosPorGeneroArrow('Distopia');
console.log(livrosDeDistopia);


// ------------------------------------------------------------------------
// ATIVIDADE 3: Criar uma lista de títulos
//
// Crie uma função que retorne um novo array contendo apenas os títulos
// de todos os livros da biblioteca.
// ------------------------------------------------------------------------

const obterApenasTitulos = () => {
  // O método .map() transforma cada item do array original em algo novo.
  // Aqui, para cada objeto 'livro', retornamos apenas a sua propriedade 'titulo'.
  return livros.map(livro => livro.titulo);
};

// Teste da Atividade 3
console.log('\n--- Atividade 3: Lista de todos os títulos ---');
const todosOsTitulos = obterApenasTitulos();
console.log(todosOsTitulos);


// ------------------------------------------------------------------------
// ATIVIDADE 4 (DESAFIO): Livros de autores específicos publicados após um certo ano
//
// Crie uma função que aceite o nome de um autor e um ano como parâmetros.
// A função deve retornar um array com os livros desse autor publicados
// DEPOIS do ano especificado.
// Dica: você precisará encadear (usar um após o outro) os métodos filter.
// ------------------------------------------------------------------------

const livrosDeAutorAposAno = (autor, ano) => {
  // Encadeamento de métodos: o resultado do primeiro .filter()
  // (um array filtrado) é usado como base para o segundo .filter().
  return livros
    .filter(livro => livro.autor === autor)
    .filter(livro => livro.anoPublicacao > ano);
};

// Teste da Atividade 4
console.log('\n--- Atividade 4: Livros de J.R.R. Tolkien publicados após 1950 ---');
const livrosTolkienPos1950 = livrosDeAutorAposAno('J.R.R. Tolkien', 1950);
console.log(livrosTolkienPos1950);


// Arquivo: atividade.js (Solução da Atividade 5)

// [ ... outras atividades ... ]

// ------------------------------------------------------------------------
// ATIVIDADE 5: Criando Cartões de Apresentação com Desestruturação
// ------------------------------------------------------------------------

const criarCartoesDeLivros = () => {
  // Usamos .map() para transformar cada objeto do array em uma string.
  // A mágica acontece no parâmetro: ({ titulo, autor, anoPublicacao })
  // Isso diz ao JavaScript: "Para cada objeto do array, em vez de me dar
  // o objeto inteiro (que chamaríamos de 'livro'), por favor, já extraia
  // (desestruture) apenas estas três propriedades para mim."
  return livros.map(({ titulo, autor, anoPublicacao }) => {
    return `Título: ${titulo} | Autor: ${autor} | Ano: ${anoPublicacao}`;
  });
};

// Teste da Atividade 5
console.log('\n--- Atividade 5: Cartões de Apresentação dos Livros ---');
const cartoes = criarCartoesDeLivros();
console.log(cartoes);