async function parallelCalls(urls) {
    try {
        const responses = await Promise.all(
            urls.map(url => fetch(url).then(res => res.json())) // Fetch each URL concurrently
        );
        console.log("All responses:", responses);
    } catch (error) {
        console.error("Error during parallel API calls:", error.message);
    }
}

parallelCalls([
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3"
]);
