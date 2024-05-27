document.addEventListener('DOMContentLoaded', function () {
    const showPasswordEye = document.getElementById('show-password-eye');
    const hidePasswordEye = document.getElementById('hide-password-eye');
    const closedEyesImg = document.getElementById('static-monkey-closed-eyes');
    const openEyesImg = document.getElementById('static-monkey-open-eyes');
    const gifImg = document.getElementById('gif-monkey');
    const passwordInput = document.getElementById('password');

    openEyesImg.style.display = 'none';
    gifImg.style.display = 'none';

    showPasswordEye.addEventListener('click', function () {
        showOrHidePassword();
    });

    hidePasswordEye.addEventListener('click', function () {
        showOrHidePassword();
    });

    function showOrHidePassword() {
        if (passwordInput.type === 'password') {
            showPasswordEye.style.display = 'none';
            hidePasswordEye.style.display = 'block';
            passwordInput.type = 'text';
            closedEyesImg.style.display = 'none';
            gifImg.style.display = 'block';

            setTimeout(() => {
                gifImg.style.display = 'none';
                openEyesImg.style.display = 'block';
            }, 1000);
        } else {
            hidePasswordEye.style.display = 'none';
            showPasswordEye.style.display = 'block';
            passwordInput.type = 'password';
            openEyesImg.style.display = 'none';
            gifImg.style.display = 'none';
            closedEyesImg.style.display = 'block';
        }
    }
});
