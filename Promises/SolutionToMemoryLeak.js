

function nonLeakingLoop() { // Esta solución cambia radicalmente el comportamiento del programa
                            // Por lo que no se propagarán errores que sujan dentro del método recursivo
     delay(1)
    .then(() => {
        console.log(`Leaking loop Tick ${Date.now}`);
        nonLeakingLoop();
    })
}

function delay(miliseconds) { // Simulación de una operación asincrona
    return new Promise((resolve, reject) => {
        setTimeout ( () =>
        resolve(new Date())
        ,miliseconds) 
    });
}


nonLeakingLoop();
