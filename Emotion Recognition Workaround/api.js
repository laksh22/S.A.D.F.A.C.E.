
// POST to httpbin which returns the POST data as JSON
const Http = new XMLHttpRequest();
let data = new FormData();
data.append(
    'time', "34"
);
data.append(
    'time1', '17'
);

const url='http://127.0.0.1:5000/';
Http.open("POST", url);
Http.send(data);
Http.onreadystatechange=(e)=>{
console.log(Http.responseText)
};