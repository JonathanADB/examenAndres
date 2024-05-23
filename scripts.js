/* ****************************************************
                     script-fecha
*******************************************************  */   
const $fecha = document.querySelector('.fecha');

function digitalClock(){
    let f = new Date(),
    dia = f.getDate(),
    mes = f.getMonth(),
    anio = f.getFullYear(),
    diaSemana = f.getDay();
    
    dia = ('0' + dia).slice(-2);

    let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves','V', 'Sábado'];
    let showSemana = (semana[diaSemana]);

    let mesAnio = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    let showMes = (mesAnio[mes]);

    document.querySelector('.fecha').innerHTML = `${showSemana} ${dia} ${showMes} ${anio}`
} 

setInterval(() => {
    digitalClock()

}, 1000);


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
/*funcion para mover la animacion del formulario*/

document.getElementById("btn_iniciarSesion").addEventListener("click", iniciarSesion);
document.getElementById("btn_registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPagina); 
const contenedor_loginRegister = document.querySelector(".contenedor_loginRegister");
const formulario_login = document.querySelector(".formulario_login");
const formulario_register = document.querySelector(".formulario_register");
const caja_traseraLogin = document.querySelector(".caja_traseraLogin");
const caja_traseraRegister = document.querySelector(".caja_traseraRegister");

function anchoPagina(){
    if(window.innerWidth > 850) {
        caja_traseraLogin.style.display = "block";
        caja_traseraRegister.style.display = "block";
    } else {
        caja_traseraRegister.style.display = "block"
        caja_traseraRegister.style.opacity = "1";
        caja_traseraLogin.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_loginRegister.style.left = "0px";
    }
}

function iniciarSesion(){

    if(window.innerWidth > 850){

        formulario_register.style.display = "none";
        contenedor_loginRegister.style.left = "10px"
        formulario_login.style.display = "block";
        caja_traseraRegister.style.opacity = "1";
        caja_traseraLogin.style.opacity = "0";
    }else { 
        formulario_register.style.display = "none";
        contenedor_loginRegister.style.left = "0px"
        formulario_login.style.display = "block";
        caja_traseraRegister.style.display = "block";
        caja_traseraLogin.style.display = "none";
    }
}

function register(){

    if(window.innerWidth > 850) { 
        formulario_register.style.display = "block";
        contenedor_loginRegister.style.left = "410px"
        formulario_login.style.display = "none";
        caja_traseraRegister.style.opacity = "0";
        caja_traseraLogin.style.opacity = "1";
   } else {
        formulario_register.style.display = "block";
        contenedor_loginRegister.style.left = "0px"
        formulario_login.style.display = "none";
        caja_traseraRegister.style.display = "none";
        caja_traseraLogin.style.display = "block";
        caja_traseraLogin.style.opacity = "1";
    }
}


/*a partir de aqui es el funcionamiento del registro y la autentificacion
lo anterior es solo animacion */

/////////////////**********trabajando con registro
const signupForm = document.querySelector(".formulario_register" )
signupForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const usuario = document.querySelector('#usuario').value;
    const password = document.querySelector('#password').value;
    
    // Verificar si hay datos almacenados en localStorage
    const storedUsers = localStorage.getItem('users');
    const Users = storedUsers ? JSON.parse(storedUsers) : [];
    
    const isUserRegistered = Users.find(user => user.email === email || user.usuario === usuario);
    if(isUserRegistered){
        return alert('El usuario ya está registrado')
    }

    Users.push({name: name, email: email, usuario:usuario, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Exitoso!')

    window.location.href = '../index.html'

 });

 //*************trabajando con login 
const loginForm = document.querySelector('.formulario_login')
loginForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const email = document.querySelector('#emailLogin').value; 
    const password = document.querySelector('#passwordLogin').value;
   
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.email === email && user.password === password); 
   
   if (!validUser){
        return alert('Usuario y/o contraseña incorrectos!');
    }else {

      alert(`Bienvenido ${validUser.name}`);
      window.location.href = '../index.html'
     }
  });




