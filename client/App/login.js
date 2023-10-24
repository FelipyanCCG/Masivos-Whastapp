import { comprobarEstadoSesion, ocultarFormularioLogin, setCookie, getCookie } from './sesion.js';

const loginContainer = document.getElementById("formLogin");
const bodytemplate = document.getElementById("bodytemplate")
const body = document.getElementById("body");
let loginCheck = false;
let actualyUser = "";
let tokenLogin = ""

function Start(flag) {
    loginContainer.style.display = flag ? "block" : "none";
    body.classList.toggle("d-flex", flag);
    body.classList.toggle("align-items-center", flag);
    body.classList.toggle("py-4", flag);
    body.classList.toggle("bg-body-tertiary", flag);
    bodytemplate.style.display = flag ? "none" : "block";
    document.getElementById("user").innerHTML = flag ? actualyUser : getCookie("username");
}
// Función para realizar el inicio de sesión
function login(username, password) {
    if (username === "" || password === "") {

        alert("Por favor, complete todos los campos.");

    } else {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        const data = new FormData();
        data.append("email", username);
        data.append("password", password);

        console.log('email' + username, 'Password' + password);

        return fetch('http://compartida.ccgltda.com/api/login', {
            method: "POST",
            headers: myHeaders,
            body: data,
            redirect: 'follow'
        })
        .then(response => response.json())
        .catch(error => {
            
            alert("Hubo un error en la solicitud. Por favor, inténtalo de nuevo más tarde.");
        })
        .then(result => {
            if (result.data && result.data.token) {
                tokenLogin = result.data.token
                console.log("Token: " + tokenLogin);
                Start(0);    
                if (flexCheckDefault.checked) {
                    setCookie("loggedIn", "true", 0.05);
                }
                console.log("Usuario autenticado");
            } else {
                alert("Credenciales inválidas");
                Start(1);
            }
        })

    }
}

// Función para cerrar sesión
function cerrarSesion(setCookie) {
    loginCheck = false;
    setCookie("loggedIn", "false", -0.05);
    setCookie("username", "", -0.05);
    Start(1);
    window.location.reload();

}
function obtenerTokenLogin(){
    return tokenLogin
}
function obtenerUser() {

    return actualyUser;
}

export { login, cerrarSesion, obtenerUser, obtenerTokenLogin };
