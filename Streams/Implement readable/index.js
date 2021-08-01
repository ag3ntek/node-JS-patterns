import { RandomStream } from "./random stream.js";

const randomStream = new RandomStream();

randomStream
    .on('data', (chunk) => { 
    console.log(`The cunk of data ${chunk.toString()}`);
    })
    .on('end', () => {console.log(`Produced ${randomStream.emittedBytes} of data`)});
