// envio.js
const url = "./newphp.php";
let cont = 1;
async function send_to_excel(response) {
    const url = 'https://script.google.com/macros/s/AKfycbzBtbRc0poamnKGInDexoESmf1GKcwN9AnOUu4RgBDJ3VAWecOmuzK6NutYQMbEY0XkSQ/exec';

    const options = {
        method: 'POST',
        body: new URLSearchParams(response),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    // Agregar un retraso de 0.5 segundos (500 milisegundos) antes de realizar la solicitud
    await new Promise(resolve => setTimeout(resolve, 500));

    fetch(url, options)
        .then(response => {
            if (response.ok) {
                return response.text(); 
            } else {
                throw new Error('Error en la solicitud.');
            }
        })
        .then(data => {
            console.log('Solicitud exitosa. Respuesta:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
async function enviarRegistro(registro, plantilla, imagen) {
    const formData = new FormData();

    formData.append("loginCheck", true);
    formData.append("registro", JSON.stringify({
        identificador: registro.identificador,
        telefono: registro.telefono,
        plantilla: plantilla,
        imagen: imagen,
    }));

    return fetch(url, {
        method: "POST",
        body: formData,
    })
        .then(response => {
            if (response.ok) {
                return response.json()
                    .then(responseData => {
                        console.log(responseData);
                        responseData.fecha = new Date();
                        return responseData;
                    });
            } else {
                throw new Error("Error en la solicitud");
            }
        });
}

async function enviarRegistros(plantilla, imagen, user) {
    const archivoInput = document.getElementById("archivoExcel");
    const archivo = archivoInput.files[0];

    if (!archivo) {
        alert("Por favor, selecciona un archivo Excel.");
        return;
    }

    const reader = new FileReader();
    reader.onload = async function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];

        if (
            firstSheet["A1"] &&
            firstSheet["B1"] &&
            /^[0-9]+$/.test(firstSheet["A1"].v) &&
            /^[0-9]+$/.test(firstSheet["B1"].v)
        ) {
            const validacionModal = new bootstrap.Modal(
                document.getElementById("validacionModal")
            );
            const spinner = document.getElementById("spinner");
            const mensajeDetalles = document.getElementById("mensajeDetalles");
            spinner.style.display = "inline-block";
            validacionModal.show();

            const registros = Object.keys(firstSheet)
                .filter((cell) => cell.startsWith("A"))
                .map((cell) => {
                    const identificador = firstSheet[cell].v;
                    const telefonoCell = `B${cell.substring(1)}`;
                    const telefono = firstSheet[telefonoCell].v;

                    return { identificador, telefono, plantilla, imagen };
                });

            const fecha = new Date();
            const resultados = []; // Almacena los resultados

            for (const registro of registros) {
               
                await new Promise(resolve => setTimeout(resolve, 600));

                try {
                    const response = await enviarRegistro(registro, plantilla, imagen);

                    const estado = response.messages?.[0]?.message_status || "refused";
                    const codigo = response.messages?.[0] ? "201" : "100";
                    const meta_id =
                        response.messages?.[0]?.id || response.error?.fbtrace_id;
                    const telefono = response.telephone;
                    const fecha = response.fecha;

                    mensajeDetalles.innerHTML = "";
                    mensajeDetalles.innerHTML = `<p>Registro procesado ${cont++}</p>`;

                    send_to_excel({
                        estado,
                        codigo,
                        meta_id,
                        telefono,
                        plantilla,
                        user,
                        fecha,
                    });

                    resultados.push({
                        estado,
                        codigo,
                        meta_id,
                        telefono,
                        plantilla,
                        user,
                        fecha,
                    });
                } catch (error) {
                    console.error("Error al enviar registros:", error);
                    mensajeDetalles.innerHTML = `<p>Error al enviar registros: ${error.message}</p>`;
                }
            }

            // Crear un archivo CSV a partir de los resultados
            let csvContent = "Estado,Codigo,Meta_ID,Telefono,Plantilla,Usuario,Fecha\n";
            resultados.forEach(envio => {
                csvContent += `${envio.estado},${envio.codigo},${envio.meta_id},${envio.telefono},${envio.plantilla},${envio.user},${envio.fecha.toISOString()}\n`;
            });

            // Crear un enlace para descargar el archivo CSV
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", "data:text/csv;charset=utf-8," + encodedUri);
            link.setAttribute("download", "detalles_envio.csv");
            link.style.display = "none"; // Ocultar el enlace
            document.body.appendChild(link);

            // Simular un clic en el enlace para descargar el archivo
            link.click();

            // Eliminar el enlace después de la descarga
            document.body.removeChild(link);

            // Mostrar el número de registros correctos e incorrectos
            document.getElementById("registrosCorrectos").textContent = `Registros correctos: ${resultados.filter(res => res.estado === "accepted").length}`;
            document.getElementById("registrosIncorrectos").textContent = `Registros incorrectos: ${resultados.filter(res => res.estado !== "accepted").length}`;

            spinner.style.display = "none";
        } else {
            alert("El archivo debe tener dos columnas: identificador y número telefónico.");
        }
    };
    reader.readAsArrayBuffer(archivo);
}



function enviarEjemplo(numeroEjemplo, plantilla, imagen, user) {

    if (numeroEjemplo.value !== "" && numeroEjemplo.value.length == 10) {

        console.log("numero de ejemplo:" + numeroEjemplo.value);
        console.log("plantilla:" + plantilla);
        console.log("imagen:" + imagen);

        const validacionModal = new bootstrap.Modal(document.getElementById('validacionModal'));
        const mensajeDetalles = document.getElementById("mensajeDetalles");
        spinner.style.display = "inline-block";
        mensajeDetalles.innerHTML = `<p>Cargando... </p>`;
        validacionModal.show();

        const formData2 = new FormData();
        formData2.append("loginCheck", true);
        formData2.append("registro", JSON.stringify({
            identificador: 1,
            telefono: "57" + numeroEjemplo.value,
            plantilla: plantilla,
            imagen: imagen
        }));
        console.log(user);
        fetch(url, {
            method: "POST",
            body: formData2,
        })
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(responseData => {
                            spinner.style.display = "none";
                            mensajeDetalles.innerHTML = "";
                            console.log(responseData); // Datos de respuesta JSON
                            mensajeDetalles.innerHTML = `<p>El numero : ${numeroEjemplo.value} fue procesado</p>`;
                            responseData; // Devuelve los datos JSON

                        });
                } else {
                    throw new Error("Error en la solicitud");
                }
            });
    } else {

        mensajeDetalles.innerHTML = "";
        mensajeDetalles.innerHTML = `Numero no valido`;
        console.log("Numero no valido");

    }

}

export { enviarRegistro, enviarRegistros, enviarEjemplo };
