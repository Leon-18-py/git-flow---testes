let nome = document.getElementById("nome")?.value;
let email = document.getElementById("email")?.value;
let telefone = document.getElementById("telefone")?.value;
let senha = document.getElementById("senha")?.value;

function validarsenha(){
    if (senha.value < 6) {
        console.log = "A senha deve ter pelo menos 6 caracteres.";
        return false;
    }
     
}
function validarEmailSimples(email) {
    const posicaoArroba = email.indexOf("@");
    
    const posicaoPonto = email.lastIndexOf(".");


    if (posicaoArroba > 0 &&  posicaoPonto > posicaoArroba + 1 && posicaoPonto < email.length - 1) {
        return true;
    } else {
        return false;
    }
}

function validartelefone(){
    if(telefone.value < 14){
        console.log = "número invalido"
        return false;
    }else{
        return true
    }
}

    
function Sucesso(){
    if(nome = true && senha >= 6 && email == true && telefone == true){
        console.log = "Sucesso"
    }
}