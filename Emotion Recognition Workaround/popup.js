$(document).ready(function(){
	chrome.tabs.getSelected(null,function(tab) {
    var tablink = document.createElement('a');
    tablink.href = tab.url;
    $('#host').html("Host : " + tablink)
		});
	// var timestamp = document.querySelector('.video-stream').getCurrentTime();
	// $('#time').html("Current Time : " + timestamp);
});

// Add listener for start button
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("start").addEventListener('click', process_video);
});


function process_video() {
    chrome.tabs.executeScript(null, {file: 'test.js'});
    document.getElementById("messages").innerHTML = lmao;
}
