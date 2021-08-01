import {EventEmitter} from 'events';

function ticker(miliseconds, callback) {

    const emitter = new EventEmitter();
    
    let milisecs = 0;
    let counter = 0;

    setTimeout(
        function setTime() {
            milisecs = milisecs + 50;
            emitter.emit('tick', milisecs);         
            counter++;
           
            if (Date.now() % 5 == 0) {
                emitter.emit('err');
                callback('Error, the number is not divisible by 5', null);
            } else if( miliseconds > milisecs ){
                setTimeout(setTime, 50);
            } else {
                emitter.emit('invoked')
                callback(null, counter);
            } 
        }
        , 50);

    return emitter;
}

ticker(22200, (err, counter) => {if(err) {console.log(err);} else {console.log(counter)} })
                                            .on('invoked', () => console.log(50) )
                                            .on('tick', tick => console.log(`The time is ${tick}`))
                                            .on('err', () => console.log('Number not divisible by 5'))
