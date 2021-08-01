// Cuando tenemos cadenas de promesas de resolución infinitas se pueden presentar problemas de memoría
// dejando huellas o residuos en memoría

function leakingLoop() { // La promesa que se arroja nunca se resuelve, porque su estado depende de la siguiente invocación de leakingLoop que depende de la siguiente
                         // inocación de leakingLoop y asi sucesivamente
                         // Esta situación crea una cadena de promesas que nunca se establecen creando una leak memory
    return delay(1)
               .then(() => {
                   console.log(`Leaking loop Tick ${Date.now}`);
                   return leakingLoop();
               })
}

function delay(miliseconds) { // Simulación de una operación asincrona
    return new Promise((resolve, reject) => {
        setTimeout ( () =>
            resolve(new Date())
            ,miliseconds) 
    });
}


for(let i = 0; i < 1e6; i++) {
    leakingLoop(); // Para evitar este consumo de memoria excesivo, se debe de alguna manera romper la cadena de resolución de promesas
}