const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
];

//map

const idadeUsuarios = usuarios.map(item => item.idade);

console.log(idadeUsuarios); //resultado: [23, 15, 30]

//filter

const filterRocketseat = usuarios.filter(
  item => item.idade >= 18 && item.empresa === 'Rocketseat'
);

console.log(filterRocketseat); //resultado: {nome: "Diego", idade: 23, empresa: "Rocketseat"}

//find

const findGoogle = usuarios.find(item => item.empresa === 'Google');

console.log(findGoogle); //resultado: undefined

//Unindo operações

const newUsuarios = usuarios
  .map(item => ({ ...item, idade: item.idade * 2 }))
  .filter(item => item.idade <= 50);

console.log(newUsuarios);
/*resultado: 0: {nome: "Diego", idade: 46, empresa: "Rocketseat"}
             1: {nome: "Gabriel", idade: 30, empresa: "Rocketseat"} */
