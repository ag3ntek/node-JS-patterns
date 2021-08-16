export class ColorConsole {
    log() {
    }
}

class BlueConsole extends ColorConsole {

    log(word) {
        console.log("\x1b[34m", word);
    }

}

class GreenConsole extends ColorConsole {

    log(word) {
        console.log("\x1b[32m", word);
    }
}

class RedConsole extends ColorConsole {

    log(word) {
        console.log("\x1b[31m", word);
    }
}

export function factory(color) {
    if(color === 'blue') {
        return new BlueConsole();
    } else if(color === 'red') {
        return new RedConsole();
    } else if(color === 'green') {
        return new GreenConsole();
    } else {
        return new ColorConsole();
    }
    
}
