// Para implementar el iterable protocol, necesito sobreescribir el método @@iterator

class Matrix {
    constructor(matrix) {
        this.data = matrix;
    }

    get(row,column) {
        if(row >= this.data.length || column >= this.data[row].length) {
            throw new RangeError('Out of bounds');
        }
        return this.data[row][column];
    }

    set(row, column, value) {
        if(row >= this.data.length || column >= this.data[row].length) {
            throw new RangeError('Out of bounds');
        }

        this.data[row][column] = value;
    }

    // Aca está el iterator, este método se puede usar para diferentes interfaces de la API de js
    // y librerias de terceros que en su signature, como parámetro reciban una interface
    [Symbol.iterator] () {
      let nextRow = 0;
      let nextCol = 0;

      return {
          next: () => {
              if(nextRow === this.data.length) {
                  return {done: true}
              }

              const currVal = this.data[nextRow][nextCol];

              if(nextCol === this.data[nextRow].length -1) {
                  nextRow++;
                  nextCol = 0;
              } else {
                  nextCol++;
              }

              return {value: currVal};
          }
      }
    }


}


const matrix2x2 = new Matrix([
    [11,12],
    [22,34]
]) 


// Como es un iterable, se puuede recorrer por medio de un for of
for(const item of matrix2x2) {
    console.log(item);
}

// Otra función compatible con iterators es el spread operator
const spreadOperatorOverIterable = [...matrix2x2];
console.log(spreadOperatorOverIterable);

// los iterables tambien son compatibles para usar la destructuración de objetos
const [firstElement] = matrix2x2;
console.log(firstElement);


