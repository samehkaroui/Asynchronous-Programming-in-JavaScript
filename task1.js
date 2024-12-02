
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
        console.log(value);
    }
}


iterateWithAsyncAwait([10, 20, 30, 40, 50]);
