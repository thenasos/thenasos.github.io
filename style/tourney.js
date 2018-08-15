var totalNodes = "";
var matchName = "";
$.ajax({
type     : "GET",
url      : "tournaments.xml",
dataType : "xml",
success  : function(xmlData){
matchName = $('name',xmlData).innerHTML;
		 $('#game1')[0].innerHTML = matchName;
	}
	
}

 // count XML nodes
//alert("This XML file has " + totalNodes);

},
error    : function(){
     alert("Could not retrieve XML file.");
}
 });
