// Trampa del return vs await return

// Un claro ejemplo de un antipatron cuando se trata de capturar un error provocado en una promesa

function delayError(miliseconds) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Error after " + miliseconds));
        }, miliseconds);
    }); 
}

async function errorNotCaught() {
    try {
        return delayError(1000); // La promesa retornada por esta función no es esperada  "awaited" localmente.
    } catch (err) {
        console.log("Error capturado por la función asincrona"); // En esta verión no se capturará el error // Por lo tanto esto nunca se invoca
    }
}

errorNotCaught().catch( err => {console.log("Error capturado por el caller " + err.message)})


// Si quiero capturar el error local generado por la operación asíncrona entonces:
async function errorCaught() {
    try {
        return await delayError(1000);
    } catch (err) {
        console.log("Error capturado por la función asincrona");
    }
}

errorCaught().catch( err => {console.log("Error capturado por el caller " + err.message)})








