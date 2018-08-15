var totalNodes = "";
var matchName = "";
var currentFight1 = "";
var currentFight2
var apik= "";
var participantsList = "";
var currentFight1disp = "";
var currentFight2disp = "";

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;


$.ajax({
type     : "GET",
url      : "tournaments.xml",
dataType : "xml",
success  : function(xmlData){
	matchName = $('name',xmlData)[0].innerHTML;
	$('#game1')[0].innerHTML = matchName;	
	}
});

$.ajax({
type     : "GET",
url      : "matches.xml",
dataType : "xml",
success  : function(xmlData){
	totalNodes = $('match',xmlData);
	for (var i=0; i<totalNodes.length; i++){
		if ($('state',xmlData)[i].innerHTML === "open"){
			currentFight1 = $('player1-id',xmlData)[i].innerHTML;
			currentFight2 = $('player2-id',xmlData)[i].innerHTML;
			$.ajax({
			type     : "GET",
			url      : "participants.xml",
			dataType : "xml",
			success  : function(xmlData){
				participantsList = $('id', xmlData);
				for (var x=0; x<participantsList.length; x++){
					if ($('id', xmlData)[x].innerHTML === currentFight1){
						currentFight1disp = $('name', xmlData)[x].innerHTML;
					}
					if ($('id', xmlData)[x].innerHTML === currentFight2){
						currentFight2disp = $('name', xmlData)[x].innerHTML;
					}
					$('.fighting')[0].innerHTML = currentFight1disp + " vs " + currentFight2disp;
				}
			
			}});

	}}
}});

	$( ".next1" ).load( "names.html #next1 li");
    var t = setTimeout(startTime, 500);
	
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}