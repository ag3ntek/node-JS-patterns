function streamHandling() {
    stream1
        .pipe(stream2)
        .on('error', () => {})
} 

// En este caso se van a capturar los errores emitidos pore el stream2 pero no por el stream1


// Si se quiere hacer un catch del stream1 se debería:
function streamHandling() {
    stream1
        .on('error', () => {})
        .pipe(stream2)
        .on('error', () => {})
} 
// Lo anterior no es lo ideal porque:
  /* 
    1. En caso de evento de error el pipe solo se es acabado cuando termina su ejecuición
    2. Si no se destruye correctamente pueden quedar leak Memories y dangling resources (conexiones, descripción de achivos etc, consecuencia del punto 1)
  */


// Así es como se podría implementar la destrucción de los streams de manera correcta cuando surja un error
function handleError(err) {
    console.log(error);
    stream1.destroy();
    stream2.destroy();
}

stream1
.on('error', handleError)
.pipe(stream2)
.on('error', handleError)
// Lo anterior no es lo mejor, ya que el tratamiento para cada uno es de manera manua
// Una mejor implementación sería con el método pipeline()

pipeline(stream1, stream2, stream3, stream4 ... cb);
// De esta manera se cierran y destruyen los streams cuando se termine o cuando falle
// El callback es opcional en caso de que llegue a fallar el procesamiento de los streams
// y el error vendrá como primer argumento 






