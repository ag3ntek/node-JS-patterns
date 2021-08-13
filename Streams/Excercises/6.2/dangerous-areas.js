import { Transform } from 'stream';


export class DangerousAreas extends Transform {
    constructor(options = {}) {
        options.objectMode = true;
        super(options);
        this.areas = {}
    }

    _transform(record, enc, cb) {
        const area = record.lsoa_code;

        if(Object.keys(this.areas).includes(area)) {
          this.areas[area] = parseInt(this.areas[area]) + parseInt(record.value);  
        } else {
          this.areas[area] = parseInt(record.value);
        }
        cb();
    }

    _flush(cb) {
        console.log(this.areas);
        cb();
    }

}