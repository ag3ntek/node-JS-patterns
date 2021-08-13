import { Transform } from "stream";

export class NumberCrimes extends Transform {
    constructor(options = {}) {
        options.objectMode = true;
        super(options);
        this.years = {};
    }

    _transform(record, enc, cb) {
      const year = record.year;
      
      if(Object.keys(this.years).includes(year)) {
        this.years[year] = parseInt(this.years[year]) + parseInt(record.value);
      } else {
        this.years[year] = parseInt(record.value);
      }
      cb();
    }

    _flush(cb) {
      console.log(this.years);     
      cb();
    }
}

/* 

  '2008': 738641,
  '2009': 717214,
  '2010': 715324,
  '2011': 724915,
  '2012': 737329,
  '2013': 686407,
  '2014': 680183,
  '2015': 711624,
  '2016': 736121

*/