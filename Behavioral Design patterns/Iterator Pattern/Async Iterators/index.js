import { CheckUrls } from "./CheckUrls.js";


async function main() {
    const checkUrls = new CheckUrls([
        'https://nodejsdesignpatterns.com',
        'https://example.com',
        'https://mustbedownforsurehopefully.com'
    ])


    for await (const status of checkUrls) { // Se usa el for await...of loop ya que el checkUrls provee un iterador que retorna promesas
        console.log(status);
    }
    
}

main();