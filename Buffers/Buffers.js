import buffer from 'buffer';

// El tamaño del buffer en V8 es limitado, cambia de version en versión
console.log(buffer.constants.MAX_LENGTH);