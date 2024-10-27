const container = document.getElementById('container');
const cadastrarBtn = document.getElementById('cadastrar');
const loginBtn = document.getElementById('login');

cadastrarBtn.addEventListener('click', () =>{
    container.classList.add("active");
});

loginBtn.addEventListener('click', () =>{
    container.classList.remove("active");
});

var nome = ipt_nome.value;
var senha = ipt_senha.value;
var email = ipt_email.value;
var mensagemErro = '';
var verificacoes = 0; 

function cadastro(){
    //Validação de nome
    if(nome != ""){
        verificacoes++;
    } else {
        mensagemErro += "Nome não pode estar vazio!\n";
    }
    //
    //Validação de senha
    var contem_numero = false;

    for (i = 0; i < senha.length; i++) {
        if (!isNaN(senha[i])) {
          contem_numero = true;
          i = senha.length;
        }
      }
    
    if (
        (senha.includes(".") ||
          senha.includes("#") ||
          senha.includes("!") ||
          senha.includes("_") ||
          senha.includes("-") ||
          senha.includes("$") ||
          senha.includes("@")) &&
        senha.toUpperCase() != senha &&
        senha.toLowerCase() != senha &&
        contem_numero &&
        senha.length >= 8
      ) {
        verificacoes++;
      } else {
        mensagemErro += "Senha inválida.\n";
      }
      //
      //Validação de email
    if (
        email.includes("@") &&
        (email.endsWith(".com") || email.endsWith(".br")) &&
        email.length > 10
      ) {
        verificacoes++;
      } else {
        mensagemErro += "Email inválido.\n";
      }
      //
      //Validação final
      if (verificacoes == 3) {
        alert("Usuário Cadastrado!");
      } else {
        alert(mensagemErro);
      }
}

function acessar(){
    //Validação de senha
    var contem_numero = false;

    for (i = 0; i < senha.length; i++) {
        if (!isNaN(senha[i])) {
          contem_numero = true;
          i = senha.length;
        }
      }
    
    if (
        (senha.includes(".") ||
          senha.includes("#") ||
          senha.includes("!") ||
          senha.includes("_") ||
          senha.includes("-") ||
          senha.includes("$") ||
          senha.includes("@")) &&
        senha.toUpperCase() != senha &&
        senha.toLowerCase() != senha &&
        contem_numero &&
        senha.length >= 8
      ) {
        verificacoes++;
      } else {
        mensagemErro += "Senha inválida.\n";
      }
      //
      //Validação de email
    if (
        email.includes("@") &&
        (email.endsWith(".com") || email.endsWith(".br")) &&
        email.length > 10
      ) {
        verificacoes++;
      } else {
        mensagemErro += "Email inválido.\n";
      }
      //
      //Validação final
      if (verificacoes == 2) {
        alert("Acessado com sucesso!");
      } else {
        alert(mensagemErro);
      }

      if (senha == "Turblog#123" && email == "turblog@gmail.com"){
        window.location.href= "./index.html";
      } else {
        alert('Usuário não exite!')
      }
}