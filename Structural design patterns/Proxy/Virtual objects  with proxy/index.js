const numerosPares = new Proxy([], {
    get: (target, index) => index * 2,
    has: (target, index) => index % 2 === 0
}) // Esta es la creación de un ARRAY VIRTUAL ya que no estamos almacenando ningún valor dentro del array
// Hay que entender que aca no se está haciendo uso del patrón de diseño proxy
console.log(2 in numerosPares);
console.log(5 in numerosPares);
console.log(numerosPares[7]);
