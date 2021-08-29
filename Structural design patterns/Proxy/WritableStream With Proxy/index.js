import { createWriteStream } from 'fs';
import { writeWithLogging } from './logging-writable.js';

const writable = createWriteStream('file.txt');
const writeProxy = writeWithLogging(writable);

writeProxy.write('frt chunk', (err) => {
    if(err) console.log(err) 
});
writable.write('second chunk', (err) => {
    if(err) console.log(err) 
});