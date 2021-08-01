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

    find(files) {
        for(const file of files) {
           readFile(file, 'utf8', (err, content) => {
                this.emit('starter', file);
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
findRegexIntance.find(['fileA.txt', 'fileB.txt'])
                .on('starter', file => console.log(`Starting to reading the file ${file}`));