import { createGunzip, createGzip } from 'zlib';
import { Transform, pipeline } from 'stream';

const uppercasify = new Transform({
    transform(chunck, enc, cb) {
      this.push(chunck.toString().toUpperCase());
      cb() // Indico que ya se proceso el dato para que sea procesado el siguiente
    }
})

pipeline(
    process.stdin,
    createGunzip(),
    uppercasify,
    createGzip(),
    process.stdout,
    (err) => {
        if( err ) {
            console.log(err);
            process.exit(1);
        }
    }
)
