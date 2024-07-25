// CÓDIGO DE VALIDAÇÃO DE EMAIL
//---------------------------------------------------------------------------------------------------------------------------------------------
function checarEmail(){
    if(document.forms[0].email.velue ==""||
       document.forms[0].email.value.indexOf('@') == -1||
       document.forms[0].email.value.indexOf('.') == -1){
 // Se alguma das condições acima for verdadeira, exibe um alerta
     alert("Por favor,informar um e-mail válido");
     return false;
    }else{
        // Se o email for válido, exibe um alerta de sucesso
        alert("Email informado com sucesso")
        // Atualiza o conteúdo de um elemento HTML com o valor do email
        document.getElementById('email').innerHTML = document.forms[0].email.velue;
    }


}