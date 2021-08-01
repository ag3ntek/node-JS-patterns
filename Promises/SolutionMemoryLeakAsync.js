

async function nonLeakingLoop() { // Esta solución permite capturar errores en cualquier nivel de recursión
                            // Por lo que se propagarán errores que sujan dentro del método recursivo
    while(true) {
        await delay(1);
        console.log(`Tick on ${Date.now()}`);
    }
}

function delay(miliseconds) { // Simulación de una operación asincrona
return new Promise((resolve, reject) => {
setTimeout ( () =>
resolve(new Date())
,miliseconds) 
});
}

nonLeakingLoop();
