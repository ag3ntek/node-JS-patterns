import { Readable } from 'stream';

const mountains = [
    {name: "Everest" , size: "8828"},
    {name: "Monserrate" , size:"1110"},
    {name: "montania Normal", size: "20"}
]

const mountainStream = Readable.from(mountains); //El objectMode se settea a true por defecto cuando se usa el metodo from

mountainStream.on('data', (mountain) => {
    console.log(`The mountain ${mountain.name} and its size ${mountain.size}`)
});