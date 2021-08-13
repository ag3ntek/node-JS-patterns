import { db } from "./db.js"; // Este approach no es muy flexible, ya que la implementación de la db la estamos haciendo
                              // aca, si quisieramos implementar otra db diferente a sqlite debemos exportar 
                              // otro archivo donde se implemente otra DB
import { promisify } from 'util';

const dbRun = promisify(db.run.bind(db)); // Además de ser altamente acoplado, ya que sin db, blog no funcionaría
const dbAll = promisify(db.all.bind(db)); // Y COMO YA MENCIONAMOS, NO PUEDE HACER USO DE OTRAS DB'S

export class blog {
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