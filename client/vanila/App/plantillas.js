// plantillas.js
let plantilla = "";
let imagen = "";
const selectPlantilla = document.getElementById("selectPlantilla");
const imgPlantilla = document.getElementById("imgPlantilla");
// Función para cargar las plantillas disponibles

function cargarPlantillas() {
    // const vector = inputtextarea.value.split('\n').map(Number);
    // const vectorJSON = vector.map((numero, posicion) => ({ numero, posicion, imagen: imagen, plantilla: plantilla }));

    // console.log(vectorJSON);


    if (selectPlantilla.value === "conocedibanka") {
        imgPlantilla.style.display = "block";
        imgPlantilla.src = "https://i.ibb.co/0jH8Jxw/Screenshot-1.png";
        imagen = "https://i.ibb.co/KXM3QLT/Imagen-de-Whats-App-2023-09-26-a-las-17-31-42.jpg"
    }
    if (selectPlantilla.value === "presentacion") {
        imgPlantilla.style.display = "block";
        imgPlantilla.src = "https://i.ibb.co/r0rfGhx/Screenshot-2.png";
        imagen = "https://i.ibb.co/LS90SWG/Imagen-de-Whats-App-2023-09-26-a-las-14-09-00.jpg";

    }
    if (selectPlantilla.value === "canales") {
        imgPlantilla.style.display = "block";
        imgPlantilla.src = "https://i.ibb.co/C2t8wPK/canales.png";
        imagen = "https://i.ibb.co/H7RZpkd/canalesimg.jpg"
    }
    if (selectPlantilla.value === "pensionados") {
        imgPlantilla.style.display = "block";
        imgPlantilla.src = "https://i.ibb.co/rx3mQWW/pensionados.png";
        imagen = "https://i.ibb.co/tmMThds/pensionadosimg.jpg";
    }
    plantilla = selectPlantilla.value;
    document.getElementById("archivoExcel").disabled = false;
    enviarEjemplo.disabled = false;

};

function obtenerPlantilla() {
    return plantilla;
}

function obtenerImagen() {
    return imagen;
}

export { cargarPlantillas, obtenerPlantilla, obtenerImagen };
