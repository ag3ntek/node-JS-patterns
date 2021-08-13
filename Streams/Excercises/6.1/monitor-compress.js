import { PassThrough } from 'stream';

export class Monitor extends PassThrough {
    constructor(options = {}) {
        super(options);
        this.archive = 0;
    }

    _transform(record, enc, cb) {
        console.time('Time taken');
        this.archive += record.length;
        this.push(record);
        cb();
    }

    _flush(cb) {
        console.log("New size of archive",this.archive);
        console.timeEnd('Time taken');
        cb();
    }

}

