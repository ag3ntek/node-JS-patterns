import { EventEmitter } from 'events';
import { readFile } from 'fs';

// El patrón observador consiste de un Objeto denominado subject y listeners o funciones que se asocian a ese subject


function findRegex(files, regex) {

    const eventEmitter = new EventEmitter();
    for(const file of files) {
        readFile(file, 'utf8', (err, content) => {
            if(err) {
                return eventEmitter.emit('error', err);
            }

            eventEmitter.emit('fileread', file);
            const match = content.match(regex);
            if(match) {
                match.forEach(elem => eventEmitter.emit('found', file, elem) )
            }

        });
    }
    return eventEmitter;
}

findRegex(['fileA.txt', 'fileB.json', 'No_file_existent'], /hello \w+/g )
        .on('fileread', file => console.log(`${file} was read`) )
        .on('found', (file, match) => console.log(`Matched ${match} in ${file}`) )
        .on('error', err => console.log(`The error was ${err}`)) // Si este listener no es asociado a este evento de error, 
                                                                 // el error simplemente es disparado y el app se termina