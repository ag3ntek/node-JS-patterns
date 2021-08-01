function cpsAsync(a,b ,callback) {
    setTimeout(() => callback(a+b), 100);
}

console.log("Antes");
cpsAsync(1,2, result => console.log(result));
console.log("Despues");