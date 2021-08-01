function delay(miliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout ( () =>
            resolve(new Date())
            ,miliseconds) 
    });
}


console.log("The current date " + new Date().getSeconds());
delay(1000).then(currDate => console.log("The curr date from delay " + currDate.getSeconds()))
console.log("The current date after current date from console log " + new Date().getSeconds());


async function playingWithDelays() {
    console.log('delaying...', new Date());
    
    const dateAfterOneSecond = await delay(1000);
    console.log('date after one second', dateAfterOneSecond);

    const dateAfterthreeSeconds = await delay(3000);
    console.log('date after three seconds', dateAfterthreeSeconds);

    return 'done'; // Es como si este valor se le es pasado a Promise.resolve() y se le es retornado a la función que lo llama
}

playingWithDelays().then(x => console.log("After a few seconds " + x) );