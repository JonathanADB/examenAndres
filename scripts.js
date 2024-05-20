
/* ****************************************************
                     script-hamburguer-btn
*******************************************************  */  
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});





/* ****************************************************
                     script-form
*******************************************************  */   
document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const privacyPolicyChecked = document.getElementById('privacyPolicy').checked;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    if (!privacyPolicyChecked) {
        alert('Debes aceptar la política de privacidad');
        return;
    }

    this.submit();
});
