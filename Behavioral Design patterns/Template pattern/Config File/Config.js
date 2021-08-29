import {promises as fs} from 'fs';
import objectPath from 'object-path';

// A diferencia del strategy, el template pattern tiene ya unos métodos implementados
// y la configuración del parseo y formateo es dada en la clase y no en runtime 
export class Config {
    async load(file) {
        console.log('deserialializing', file);
        this.data = this._deserialize(await fs.readFile(file, 'utf-8'));
    }

    async save(file) {
        await fs.writeFile(file , this._serialize(this.data));
    }

    get(path) {
      return objectPath.get(this.data, path);
    }

    set(path, value) {
      return objectPath.set(this.data, path, value);
    }

    _serialize() {
        throw new Error('Must be implemented');
    }

    _deserialize() {
        throw new Error('Must be implemented');
    }
}