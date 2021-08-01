import { randomBytes } from 'crypto';

// Esta función convierte una función basada en callback en una promesa
function promisify(callbackBasedAPI) {
  return function promisified(...args) {
    return new Promise((resolve, reject) => {
      const newArgs = [
          ...args,
          function(err, result) {
            if(err) {
              return err;
            }

            resolve(result);
          }
      ]
      callbackBasedAPI(...newArgs);
    })
  }
}


const promisifyRandomBytes = promisify(randomBytes);
promisifyRandomBytes(32).then( buffer => console.log("result of buffer " + buffer.toString()))
