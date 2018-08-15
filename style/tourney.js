var totalNodes = "";
var matchName = "";
var currentFight1 = "";
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
	//currentFight1 = $('player1-id',xmlData)
	for (var i=0; i<totalNodes.length; i++){
		if ($('state',xmlData)[i].innerHTML === "open"){
			var currentFight1 = $('player1-id',xmlData)[i].innerHTML;
			var currentFight2 = $('player2-id',xmlData)[i].innerHTML;
			$('#next1')[0].innerHTML = currentFight1 + " vs " + currentFight2;
			//alert(currentFight1 + " vs " + currentFight2);
	}}
}});
