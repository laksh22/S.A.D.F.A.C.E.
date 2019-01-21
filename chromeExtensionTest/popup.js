function setupCam() {
  navigator.mediaDevices.getUserMedia({
    video: true
  }).then(mediaStream => {
    document.querySelector('#webcamVideo').srcObject = mediaStream;
    // recordCam(mediaStream)
  }).catch((error) => {
    console.warn(error);
  });
}

setupCam();

$(document).ready(function(){
	chrome.tabs.getSelected(null,function(tab) {
    var tablink = document.createElement('a');
    tablink.href = tab.url;
    $('#host').html("Host : " + tablink)
		});
        // ajax the JSON to the server
    $.post("receiver", tablink, function(){
    });
	// stop link reloading the page
 event.preventDefault();
});
// document.getElementById("maincam").onclick=callMainCam;
// function callMainCam(){
//   document.getElementById("ok").innerHTML="ok nice";
// }
$("#maincam").click(function(){
  $("#ok").html("OK nice")
});

