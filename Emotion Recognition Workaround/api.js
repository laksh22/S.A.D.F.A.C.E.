// POST to httpbin which returns the POST data as JSON
var tablink1;
$(document).ready(function(){
  chrome.tabs.getSelected(null,function(tab) {
   tablink1 = document.createElement('a');
    tablink1.href = tab.url;
    $('#host').html("Host : " + tablink1)
      const Http = new XMLHttpRequest();
    let data = new FormData();
    console.log(tablink1);
    data.append('link', tablink1);
    const url='http://127.0.0.1:5000/go/';
    Http.open("POST", url);
    Http.send(data);
    Http.onreadystatechange=(e)=>{
    console.log(Http.responseText)
    };
      console.log(tablink1);
    });
  // var timestamp = document.querySelector('.video-stream').getCurrentTime();
  // $('#time').html("Current Time : " + timestamp);

});
