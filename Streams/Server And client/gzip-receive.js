import { createServer } from 'http';
import { createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { basename, join } from 'path'; // baseName extrae la última porción del path, esto se hace por motivos de seguridad YA QUE EL ATACANTE PODRÍA REEEMPLAZAR
                                       // EL PATH POR usr/bin/node y cambiar nuestro interprete por cualquier otro archivo

const server = createServer((req, res) => {

    const fileName = basename(req.headers['x-filename']);
    const destFileName = join('received_files', fileName);
    console.log(`File request received ${fileName}`);

    req
    .pipe(createGunzip())
    .pipe(createWriteStream(destFileName))
       .on('finish', () => {
           res.writeHead(201, {'Content-Type': 'text/plain'})
           res.end('OK\n')
           console.log(`File saved ${destFileName}`)
       })
})

server.listen(3000, () => console.log('Listening on port http://localhost:3000'))