class ColoredConsole {
    constructor(console) {
      this.console = console;
    }

    red(...message) {
      this.console.log("\x1b[31m", ...message);
    }

    yellow(...message) {
        this.console.log("\x1b[33m", ...message);
    }

    green(...message) {
        this.console.log("\x1b[32m", ...message);
    }
}

const coloredConsole = new ColoredConsole(console);
coloredConsole.red("hi my nade is daniel");


// USANDO EL OBJETO PROXY
function coloredConsoleProxyObject(console) {
    return new Proxy(console, {
      get: (target, property) => {
        if (property === 'red') {
            return(...args) => {
                console.log("\x1b[31m",...args);
            }
        }
        if (property === 'yellow') {
            return(...args) => {
                console.log("\x1b[33m",...args);
            }
        }
        if(property === 'green') {
            return(...args) => {
                console.log("\x1b[32m", ...args);
            }
        }
        return target[property];
      }
    });
}


const coloredConsoleFunction = coloredConsoleProxyObject(console);
coloredConsoleFunction.red("hi from function");
coloredConsoleFunction.green("hi from function");
coloredConsoleFunction.log("hi from function");
coloredConsoleFunction.error("hi from function");