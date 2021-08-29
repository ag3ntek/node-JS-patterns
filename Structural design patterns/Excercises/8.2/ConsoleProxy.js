class ConsoleProxy {
    constructor(console) {
      this.console = console;
    }

    log(...message) {
        this.console.log(new Date(), ...message);
    }

    error(...message) {
        this.console.error(new Date(), ...message);
    }

    debug(...message) {
        this.console.debug(new Date(), ...message);
    }

    info(...message) {
        this.console.info(new Date(), ...message);
    }
}

const consoleProxy = new ConsoleProxy(console);
consoleProxy.info("hi", "my name is Daniel");

// USANDO EL OBJETO PROXY
function consoleProxyObject(console) {
    return new Proxy(console, {
        get: (target, property) => {
            if(property === 'log') {
                return(...args) =>  {
                    console.log(new Date(), ...args);
                }
            } else if(property === 'info') {
                return(...args) =>  {
                    console.info(new Date(), ...args);
                }
            } else if(property === 'debug') {
                return(...args) =>  {
                    console.debug(new Date(), ...args);
                }
            } else if(property === 'error') {
                return(...args) =>  {
                    console.error(new Date(), ...args);
                }
            }
            
            return target[property];
        }
    })
}

const consoleProxyObject2 = consoleProxyObject(console);
consoleProxyObject2.error("hi");