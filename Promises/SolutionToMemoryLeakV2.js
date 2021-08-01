

function nonLeakingLoop() { // Esta solución permite capturar errores en cualquier nivel de recursión
                            // Por lo que se propagarán errores que sujan dentro del método recursivo
    return new Promise( (resolve, reject) => {
        (function internalLoop() {
            delay(1)
            .then(() => {
            console.log(`Leaking loop Tick ${Date.now}`);
            internalLoop();
        }).catch(err => reject(err))
    })()
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
