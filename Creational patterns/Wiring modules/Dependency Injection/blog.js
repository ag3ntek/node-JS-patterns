// Con este nuevo approach ya no es necesario importar db.js
import { promisify } from 'util';


export class Blog {
    constructor(db) { // Ahora db se recibe como parámetro, de esta manera se puede recibir varias implementaciones que pueden ser construidas en runtime 
      this.db = db; // Dependencia recibida como parámetro desde el componente cliente
      const dbRun = promisify(db.run.bind(db));   // EN ESTE CASO, DB ES CONSIDERADO COMO EL INJECTOR
      const dbAll = promisify(db.all.bind(db));
    }  // COMO EN JS NO HAY ALGO QUE REPRESENTE INTERFACES ABSTRACTAS, SE ESPERA QUE LA DEPENDENCIA IMPLEMENTE db.run() y db.all() (DUCK TYPING)

    initialize() {
        // Se usa el método dbRun
    }

    createPost() {
       // Se usa dRun 
    }

    getAllPost() {
        // Se usa dbAll
    }
}