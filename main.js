const form = document.getElementById('form-formulario');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroum = document.getElementById('numberone');
    const numerodois = document.getElementById('numbertwo');
    const numeroUm = parseInt(numeroum.value);
    const numeroDois = parseInt(numerodois.value);
    const successMessage = `Os números ${numberone.value} e ${numbertwo.value} foram enviados!`
    const errorMessage = `O segundo número deve ser maior que o primeiro.`;

        if (numeroDois > numeroUm) {
            const containerMensagemSucesso = document.querySelector('.success-message');
            containerMensagemSucesso.innerHTML = successMessage; 
            containerMensagemSucesso.style.display = "block";
        } else {
            numberone.style.border = "1px solid red";
            const containerMensagemError = document.querySelector('.error-message');
            containerMensagemError.innerHTML = errorMessage; 
            containerMensagemError.style.display = "block";
        }
    });


    numberone.value = "";
    numbertwo.value = "";