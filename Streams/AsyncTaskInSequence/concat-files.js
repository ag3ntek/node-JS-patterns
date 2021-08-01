import { createReadStream, createWriteStream, createWriteStream } from 'fs';
import { Readable, Transform } from 'stream';

export function concatFiles(dest, files) {
  return new Promise((resolve, reject) => {
    const destStream = createWriteStream(dest); // Se crea un readable stream para leer el contenido del archivo y canalizarlo dentro de destStream
                                                // (Writable stream para el archivo de destino)
    Readable.from(files) // Trabaja por defecto en objectMode true, // Se van a emitir nombres de archivos // Cada chunk es el path de un archivo // El orden va de acuerdo
                         // Al orden del array en el que están los archivos
        .pipe(new Transform({ // Aca creamos un transform stream para darle manejo a cada archivo en el array en la secuencia 
            objectMode: true,
            transform(filename, enc, done) {
              const src = createReadStream(filename)
              src.pipe(destStream, {end: false}); // Se asegura de que el destSrteam no sea cerrado con el end: false
              src.on('error', done);
              src.on('end', done) // Cuando todo el contenido de todo el archivo actual se ha procesado corrrectamente se llama a la función done para comunicar la 
                                  // completitud del procesamiento actual lo cual es necesario para activar el procesamiento del siguiente archivo
            }
        }))
        .on('error', reject)
        .on('finish', () => { // Cuando se han procesado todos los archivos, el evento finish es emitido. se puede finalziar el destStream y llamar el callback
                              // function de concatFiles que avisa la completidud de toda la operación
            destStream.end();
            resolve();
        })

  })
}