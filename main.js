document.addEventListener('DOMContentLoaded', function () {
    const closedEyesImg = document.getElementById('static-monkey-closed-eyes');
    const openEyesImg = document.getElementById('static-monkey-open-eyes');
    const gifImg = document.getElementById('gif-monkey');
    const checkbox = document.getElementById('show-password');
    const passwordInput = document.getElementById('password');

    openEyesImg.style.display = 'none'
    gifImg.style.display = 'none'

    checkbox.addEventListener('change', function (e) {
        if (e.target.checked) {
            //muda o campo senha para text
            passwordInput.type = 'text';
            // Mostrar o GIF e esconder a imagem estática com olhos fechados
            closedEyesImg.style.display = 'none';
            gifImg.style.display = 'block';

            // Após 1 segundo, esconder o GIF e mostrar a imagem estática com olhos abertos
            setTimeout(() => {
                gifImg.style.display = 'none';
                openEyesImg.style.display = 'block';
            }, 1000);
        } else {
            // Voltar o campo de senha para o tipo password
            passwordInput.type = 'password';
            // Voltar para a imagem estática com olhos fechados
            openEyesImg.style.display = 'none';
            gifImg.style.display = 'none';
            closedEyesImg.style.display = 'block';
        }
    });
});
