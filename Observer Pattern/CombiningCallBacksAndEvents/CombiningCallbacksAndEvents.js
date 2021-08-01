/* Se pueden combinar callbakcs y eventos
 Cabe recordar que un evento debe ser usado para emitir 
 lo que ha sucedido durante la ejecución de una operación
 Mientras que un callback debe retornar el resultado de una operación */


 // La siguiente es una librería que combina callbacks con eventos
import glob from 'glob';

glob('data/*.txt',
    (err, files) => {
        if(err) {
            return console.error(err);
        }
        console.log(`All the files found ${ JSON.stringify(files) }`); // Obtengo el resultado de la operación
    })
    .on('match', match => console.log(`Match found ${match}`)) // Y además obtengo información de lo que aha ocurrido

