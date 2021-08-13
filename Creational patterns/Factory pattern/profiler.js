class Profiler {
  constructor(label) {
    this.label = label;
    this.lastTime = null; /* Los anteriores son públicos */
  }

  start() {
    this.lastTime = process.hrtime();
  }

  end() {
      const diff = process.hrtime(this.lastTime);
      console.log(`Timer ${this.label} took ${diff[0]} seconds and ${diff[1]} nanoseconds`);
  }
}


// En lugar de hacer export del profiler class, vamos a exportar el factory
const nooprofiler = {
    start() {},
    end() {}
} // No se retorna la clase de profiler, sino que en lugar se da una abtracción de ella 


export function createProfiler(label) {
    if(process.env.NODE_ENV==='production') {
      return nooprofiler;
    }

    return new Profiler(label);
}

