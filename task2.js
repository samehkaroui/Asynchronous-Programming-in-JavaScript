async function awaitCall() {
    const data = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Fetched data successfully!");
        }, 4000);
    });
    console.log(data);
}


awaitCall();
