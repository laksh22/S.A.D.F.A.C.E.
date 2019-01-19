$(document).ready(function(){
	chrome.tabs.getSelected(null,function(tab) {
    var tablink = document.createElement('a');
    tablink.href = tab.url;
    $('#host').html("Host : " + tablink)
		});
	// var timestamp = document.querySelector('.video-stream').getCurrentTime();
	// $('#time').html("Current Time : " + timestamp);
});
