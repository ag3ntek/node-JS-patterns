
export function writeWithLogging(writable) {
    return new Proxy( writable ,{
        get: (target, property) => {
            if(property === 'write') {
              return (...args) => {
                const [chunk] = args;
                console.log('Writing', ...args);
                writable.write(chunk);
                writable.write('\n');
              }  
            }
        }
    })
}
