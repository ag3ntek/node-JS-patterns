// Los callbacks son funciones que son pasadas a otras funciones y su resultado se propaga en esa función y no en la de origen
// Por lo tanto los callbacks no tienen return statement


function cpsSync(number1, number2, callback) {
    callback(number1 + number2);
}

// Aquí se demuestra que este callback es síncrono
console.log("antes");
cpsAsync(1,2, result => console.log(result)  )
console.log("despues");

// Es síncrono porque va a completar su ejecución solo cuando la ejecución del callback se complete también

