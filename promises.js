const promise = new Promise((resolve, reject) =>{
    resolve();
    reject();
});

promise.then(() =>{
    console.log("finished");
}).then(() => {
    console.log("after finished");
}).catch(() => {
    console.log("deu ruim");
});

const url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(`BAD ${error}`));