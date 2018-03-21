
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
  	$( "#game1" ).load( "names.html .game1");
	$( "#game2" ).load( "names.html .game2");
	$( ".next1" ).load( "names.html #next1 li");
	$( ".next2" ).load( "names.html #next2 li");
    var t = setTimeout(startTime, 500);
	
	
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
