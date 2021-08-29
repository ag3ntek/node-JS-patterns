// El iterator protocol retorna una sequencia de valores

const A_CHAR_CODE = 65;
const Z_CHAR_CODE = 90;

function createAlphabetIterator() {
    let currCode = A_CHAR_CODE;
     
    return {
      next: () => {
          const currChar = String.fromCodePoint(currCode);
          if(currCode > Z_CHAR_CODE) {
            return {done: true}
          }

          currCode++;
          return {value: currChar, done: false}
      }
    } 
}

const iterator = createAlphabetIterator();
let iteratoResult = iterator.next();

while(!iteratoResult.done) {
    console.log(iteratoResult.value);
    iteratoResult = iterator.next();
}