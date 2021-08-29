import superagent from 'superagent';

export class CheckUrls {
    constructor(urls) {
        this.urls = urls;
    }

    [Symbol.asyncIterator] () {
        const urlsIterator = this.urls[Symbol.iterator] ();
        
        return {
            async next() { // Next method es una función asíncrona, requerida por el iterable protocol, por lo tanto retorna una promesa
                const iteratorResult = urlsIterator.next();
                if (iteratorResult.done) {
                    return {done: true};    
                }

                const url = iteratorResult.value;
                try {
                    const checkResult = await superagent
                    .head(url)
                    .redirects(2)
                    
                    return {
                        done: false,
                        value: `${url} is up, status: ${checkResult.status}`
                    }

                } catch(err) {
                    return {
                        done: false,
                        value: `${url} is down, error: ${err.message}`
                    }
                }
            }
        }

    }
}