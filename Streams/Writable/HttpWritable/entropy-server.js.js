import { createServer } from 'http';
import Chance  from "chance";

const chance = new Chance();
const server = createServer((req, res) => {
    res.writeHead( 200, {'Content-type': 'text/plain'}) // No es parte del stream, no es parte del writable interface

    while( chance.bool({ likelihood: 95})) {
        res.write(`${chance.string()}\n`) // Se escribe un número random dentro del stream
    }

    res.end('\n\n');
    res.on('finish', () => {console.log('All data sent')}); // Ligar un listener al evento finish 
})

server.listen(8080, () => {console.log('Listening on http://localhost:8080')})