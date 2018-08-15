var totalNodes = "";
var matchName = "";
$.ajax({
type     : "GET",
url      : "matches.xml",
dataType : "xml",
success  : function(xmlData){
totalNodes = $('match',xmlData);
for (i = 0; i < totalNodes.length; i++){
	if(totalNodes[i].children[5].innerHTML = "B"){
		matchName = totalNodes[i].children[5].innerHTML;
		 $('#smth')[0].innerHTML = matchName;
	}
	
}

 // count XML nodes
//alert("This XML file has " + totalNodes);

},
error    : function(){
     alert("Could not retrieve XML file.");
}
 });
