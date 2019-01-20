
// POST to httpbin which returns the POST data as JSON
function myFunc(){
    const Http = new XMLHttpRequest();
let data = new FormData();
data.append(
    'link', tablink
);
const url='http://127.0.0.1:5000/';
Http.open("POST", url);
Http.send(data);
Http.onreadystatechange=(e)=>{
console.log(Http.responseText)
};
}
