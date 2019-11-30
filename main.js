class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

/* class TodoList extends List {
  constructor() {
    super();

    this.usuario = 'Thyago';
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
  MinhaLista.add('Novo todo');
};

MinhaLista.mostraUsuario(); */

//map

const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(item => item * 2);

console.log(newArr);

//reduce

const sum = arr.reduce((total, next) => total + next);

console.log(sum);

//filter

const filter = arr.filter(item => item % 2 === 0);

console.log(filter);

//find

const find = arr.find(item => item === 4);

console.log(find);

//arrow Function

const teste = () => ({ nome: 'Thyago' });

console.log(teste());

const soma = (a = 3, b = 6) => a + b;

console.log(soma(1));
console.log(soma());

//desestruturação

const usuario = {
  nome: 'Thyago',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};

/*const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;
console.log(usuario); */

const {
  nome,
  idade,
  endereco: { cidade }
} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

/* function mostraNome(usuario) {
  console.log(usuario.nome);
}

mostraNome(usuario); */

function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}

mostraNome(usuario);
