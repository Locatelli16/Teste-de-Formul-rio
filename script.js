// Validação de Formulário
function validateForm() {
    let name = document.getElementByld("name").value;
    let email = document.getElementByld("email").value;
    let password = document.getElementByld("password").value;
    let errorMessage = document.getElementByld("errorMessage");

// Parte incompleta: verificar se o campo de nome está vazio
if(/* Adicione a condição de verificação */) {
    errorMessage.textContent = "O campo de nome é obrigatório.";
    return false;
}

// Parte incompleta: validar o formato do email usando regex
if(/* Adicione a condição para validar email */) {
    errorMessage.textContent = "Email inválido.";
    return false;
}

//Parte incompleta: verificar se a senha tem pelo menos 6 caracteres
if(/* Adicione a condição para validar senha */) {
    errorMessage.textContent = "A senha deve ter pelo menos 6 caracteres.";
    return false;
}

errorMessage.textContent = "";
alert("Cadastro realizado com sucesso!");
return true;
}