async function concurrentRequests() {
    const url1 = "https://jsonplaceholder.typicode.com/posts/1";
    const url2 = "https://jsonplaceholder.typicode.com/posts/2";

    try {
        const [response1, response2] = await Promise.all([
            fetch(url1).then(res => res.json()),
            fetch(url2).then(res => res.json())
        ]);
        console.log("Response 1:", response1);
        console.log("Response 2:", response2);
    } catch (error) {
        console.error("Error during concurrent API calls:", error.message);
    }
}


concurrentRequests();
