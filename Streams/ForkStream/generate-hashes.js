import { createReadStream, createWriteStream } from 'fs';
import { createHash } from 'crypto';

const inputStream = createReadStream(process.argv[2]);

const sha1Hash = createHash('sha1').setEncoding('hex');  // Estos 2 streams van a terminar automáticamente cuando inputStream finalice a menos que se especifique 
const md5Hash = createHash('md5').setEncoding('hex');    // como propiedad { end: false }


inputStream
    .pipe(sha1Hash) // Los 2 streams de escritura, van a recibir la misma info, desde el mismo stream de lectura, asi que hay que tener cuidado con los side effects de
                    // data
    .pipe(createWriteStream(`filex.sha1`));

inputStream
    .pipe(md5Hash)
    .pipe(createWriteStream(`filex.md5`)); 

    /* Hay que tener el cuenta que el backpressure de inputStream ira igual de rápido al branch más lento de los pipes del 
    fork, pero si uno de los pipes se encarga de manejar el backpressure
    este se parará tambien para el resto de pipes */
