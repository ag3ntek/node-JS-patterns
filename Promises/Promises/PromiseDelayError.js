function delayError(miliseconds) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Error after " + miliseconds));
        }, miliseconds);
    }); 
}

async function playingWithErrors(throwsSyncError) {
    try {
        if (throwsSyncError) {
            throw new Error("This is a sync error");
        }
        await delayError(2000);
    } catch (err) {
        console.error('We have an error', err.message);
    } finally {
        console.log('Done');
    }
}


playingWithErrors(true);