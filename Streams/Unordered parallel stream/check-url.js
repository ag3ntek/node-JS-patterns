import { pipeline } from "stream";
import { createReadStream } from "fs";
import split from 'split';
import superagent from 'superagent';
import { ParallelStream } from "./parallel-stream.js";

pipeline(
    createReadStream(process.argv[2]),
    split(),
    new ParallelStream(
        async (url, enc, push, done) => {
            if(!url) {
              return done(); // Aca es donde se llama el callback que avisa que el método acabó de procesar la url
                      // Dentro de la implementación del método (En paralellStream) no se llamó directamente, sino que el método se pasó como 
                      // Un callback, al no llamar el callback que indica que acabo la operacíón directamente en la implementación podemos volver
                      // asíncrono
            }

            try {
                await superagent.head(url, { timeout: 5 * 1000}) // Método http que retorna unicamente los headers, por ejemplo puede solicitar
                                                                 // El tamaño de un archivo sin necesariamente descargarlo
                push(`${url} is up\n`);                                                                 
            } catch (err) {
                push(`${url} is down\n`);
            }
            done();
        }
    ),
    process.stdout,
    (err) => {
        if(err) {
          console.log(err);
          process.exit(1);
        }
        console.log('All urls have been checked')
    }
)