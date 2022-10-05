const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const nascimento = document.getElementById('nascimento');

form.addEventListener("submit", (e)  =>{
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const nascimentoValue = nascimento.value;

    if (usernameValue == '') {
        setErrorFor(username, 'O nome completo é obrigatório.');
    } else{
        setSuccessFor(username);
    }

    if(emailValue == '') {
        setErrorFor(email, 'O email é obrigatório.');
    } else if(!checkEmail(emailValue)) {
        setErrorFor(email, 'Por favor, insira um e-mail válido.')
    } else{
        setSuccessFor(email)
    }
}

function setErrorFor(input, message) {
    const controleform = input.parentElement;
    const small = controleform.querySelector('small')
    //adicionar mensagem de erro
    small.innerText = message;

    //adicionar classe de erro
    controleform.className = 'controleform error'
}
function setSuccessFor(input){
    const controleform = input.parentElement;

    //Adicionar a classe de sucesso
    controleform.className = 'controleform success'
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email);
}