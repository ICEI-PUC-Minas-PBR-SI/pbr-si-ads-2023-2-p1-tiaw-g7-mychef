var cookieNome = document.getElementById("nome"). value;
document.cookie = cookieNome;
var cookieemail = document.getElementById("email"). value;
document.cookie = cookieemail;
var cookierepsenha = document.getElementById("repsenha"). value;
document.cookie = cookierepsenha;

function validaforms()
{
var nome;
var email;
var senha1;
var repsenha;

nome = document.getElementById("nome").value;

if(nome == "")
{
    window.alert("Gentileza, preencha o campo de usuario ");       
}
           
email = document.getElementById("email").value;

if(email == "")
{
    window.alert("Gentileza, preencher seu email ");       
}

senha1 = document.getElementById("senha").value;
repsenha = document.getElementById("repsenha").value;

if(!validaSenha()){
    window.alert("O campo senha deve conter ao menos 8 digitos, sendo eles, uma letra Maiuscula e uma minuscula, um número e um caracter especial!!! "); 
}else if(senha1 == repsenha && senha1 != ""){
    window.alert("Cadastro conluido com sucesso, Volte para a pagina de login.");
}else {
    window.alert("As senhas devem ser iguais!");
}

}
   
    function validaSenha() {
        var senha = document.getElementById("senha").value;
        var letraMaiscula = 0;
        var numero = 0;
        var caracterEspecial = 0;
        var caracteresEspeciais = "/([~`!@#$%\^&*+=\-\[\]\\';,/{}|\":<>\?])";
        var letraminuscula = 0;
              
        if(senha.length >= 8) {
            for (var i=0; i < senha.length; i++) {
                var valorAscii = senha.charCodeAt(i);
                
                if (valorAscii >= 65 && valorAscii <= 90)
                  letraMaiscula++;

                if (valorAscii >= 48 && valorAscii <= 57)
                  numero++;

                if (caracteresEspeciais.indexOf(senha[i]) != -1)
                  caracterEspecial++;

                if (valorAscii >= 97 && valorAscii <= 122)
                  letraminuscula++;					
                } 
            }
                    
        return (letraMaiscula >= 1) && (numero >= 1) && (caracterEspecial >= 1) && (letraminuscula >= 1);
}	

function direciona() {

    window.location.assign("index.html");
}