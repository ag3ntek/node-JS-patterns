exports.mainFunction = () =>  {
    PRIVATE_FRUITS;
    keepPrivateFunction();
    console.log('Desde subStack js');
} 

function keepPrivateFunction() {
    return;
}

let PRIVATE_FRUITS = {
    fruit1: "apple",
    fruit2: "pear"
}
