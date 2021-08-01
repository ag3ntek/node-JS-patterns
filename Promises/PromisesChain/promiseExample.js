// 

asyncOperationPromise(arg)
  .then(result1 => { // Si aca no se hiciera el handler de esta operación, el valor o la rejection del resultado de esta operación va a saltar a la 
                     // siguiente promesa 
   // retorna otra promesa
   return asyncOperationPromise(arg2)
  }).then(result2 => {
     // returns a value
     return 'done';
  }).then( (undefined, err) => {
      // Cualquier error que se  genere en la cadena de promesas, se captura acá
  })

  // Si una excepción es lanzada con la palabra throw, la promesa retornada por el then() automáticamente va a ser reject

