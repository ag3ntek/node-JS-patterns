import { EventEmitter } from 'events'; 
import { readFile } from 'fs';

class FindRegex extends EventEmitter {
    
    constructor(regex) {
        super();
        this.regex = regex;
        this.files = [];
    }

    addFile(file) {
        this.files.push(file);
        return this;
    }

    find() {
        for(const file of this.files) {
                            this.emit('start', file);
            readFile(file, 'utf8', (err, content) => {
                if(err) {
                    return this.emit('error', err);
                }

                this.emit('readfile', file);

                const match = content.match(this.regex);
                if(match) {
                    match.forEach(elem => this.emit('found', file, elem))
                }

            })

        }
        return this;
    }
}


const findRegexIntance = new FindRegex(/hello \w+/);
findRegexIntance
                .addFile('fileA.txt')
                .addFile('fileB.txt')
                .find()
                .on('readfile', file => console.log(`The ReadFile is file ${file}`))
                .on('found', (file, match) => console.log(`The file ${file} was read, the string is ${match}`))
