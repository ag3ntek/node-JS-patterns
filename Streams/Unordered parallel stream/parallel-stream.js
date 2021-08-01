import { Transform } from 'stream';

export class ParallelStream extends Transform {
    constructor(userTransform, opts) { // Esto recibe como parámetro una función (userTransform) la cual es guardada como una instance variable
      super({objectMode: true,  ...opts});
      this.userTransform = userTransform;
      this.running = 0;
      this.terminateCb = null;
    }

    _transform(chunk, enc, done) { // 
      this.running++;
      this.userTransform( // Aca es donde tenemos la parte en paralelo, ya que no estamos esperando a que user transform se ejecute antes de llamar a done()
          chunk, 
          enc,
          this.push.bind(this),
          this._onComplete.bind(this) // Este callback nos avisa cuando la ejecución del userTransform ha terminado
      );
      done();
    }

    _flush(done) {                  // Se invoca antes de que el stream termine
      if(this.running > 0) {        // Si hay tareas aun corriendo, manetenemos el release del evento finish en espera
        this.terminateCb = done;
      } else {
          done()
        }
    }

    _onComplete(err) { // Este método se llama cada vez que una tarea asíncrona termine
      this.running--;
      if(err) {
        return this.emit('error', err)
      } 
      if(this.running === 0) {
        this.terminateCb && this.terminateCb(); // Si no hay más tareas corriendo se invoca al terminateCb que tiene el callback que da la señal de terminación
                                                // de la transformación
                                                // Hace el "release" del terminateCB que se había puesto a esperar en el método flush
      }
    }
}