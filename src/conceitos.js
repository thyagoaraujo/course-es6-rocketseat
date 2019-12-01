/* class List {
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

MinhaLista.mostraUsuario(); 

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
console.log(usuario); 

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

mostraNome(usuario); 

function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}

mostraNome(usuario);

//REST

const usuario = {
  nome: 'Thyago',
  idade: 23,
  empresa: 'Rocketseat'
};

const { nome, ...resto } = usuario;
console.log(nome); // nome: Thyago
console.log(resto); // idade: 23, empresa: Rocketseat

const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;

console.log(a); //1
console.log(b); //2
console.log(c); // 3, 4

function soma(a, b, ...params) {
  return params;
}

console.log(soma(1, 3, 4, 5, 6)); //params = [4,5,6]

//SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3); // [1,2,3,4,5,6]

const usuario1 = {
  nome: 'Thyago',
  idade: 23,
  empresa: 'Rocketseat'
};

const usuario2 = { ...usuario1, nome: 'Gabriel' };

console.log(usuario2); // nome: é trocado para Gabriel, empresa e idade mantém.

//Template Literals

const nome = 'Thyago';
const idade = 31;

console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos');
//Meu nome é Thyago e tenho 31 anos

console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
//Meu nome é Thyago e tenho 31 anos

// Object short

const nome = 'Thyago';
const idade = 31;

const usuario = {
  nome: nome,
  idade: idade,
  empresa: 'Rocketseat'
};

const usuario = {
  nome,
  idade,
  empresa: 'Rocketseat'
};

console.log(usuario); */

// WEBPACK

/* import { soma, sub } from './funcoes';

console.log(soma(1, 2));
console.log(sub(1, 2)); */
