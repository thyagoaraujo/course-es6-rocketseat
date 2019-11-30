class Usuario {
  constructor(email, senha) {
    this.email;
    this.senha;
  }

  isAdmin() {
    return this.admin === true;
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);

    this.admin = true;
  }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Admin1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()); //resposta false
console.log(Admin1.isAdmin()); //resposta true
