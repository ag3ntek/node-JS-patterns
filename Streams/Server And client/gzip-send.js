import { request } from 'http';
import { createGzip } from 'zlib';
import { createReadStream } from 'fs';
import { basename } from 'path';

const fileName = process.argv[2];
const serverHost = process.argv[3];

const httpRequestOptions = {
    hostname: serverHost,
    port: 3000,
    path: '/',
    method: 'PUT',
    headers: {
        'Content-type': 'application/octet-stream',
        'Content-Encoding': 'gzip',
        'X-FileName': basename(fileName)
    }
}

console.log('The path',httpRequestOptions.path);

const req = request(httpRequestOptions, (res) => {
    console.log(`Server response: ${res.statusCode}`)
})


createReadStream(fileName)
.pipe(createGzip())
.pipe(req)
.on('finish', () => {
    console.log('File successfully send');
})