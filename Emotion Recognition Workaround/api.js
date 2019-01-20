// POST to httpbin which returns the POST data as JSON

const Http = new XMLHttpRequest();
let data = new FormData();
console.log(tablink);
data.append('link', tablink);
const url='http://127.0.0.1:5000/go/';
Http.open("POST", url);
Http.send(data);
Http.onreadystatechange=(e)=>{
console.log(Http.responseText)
};