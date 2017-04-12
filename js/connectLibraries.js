var xmlhttp5 = new XMLHttpRequest();
var url = "https://data.cityofchicago.org/api/views/x8fc-8rcq/rows.json?accessType=DOWNLOAD";
xmlhttp5.open("GET", url, true);
xmlhttp5.send();

xmlhttp5.onreadystatechange = function() {
	if (xmlhttp5.readyState == 4 && xmlhttp5.status == 200) {
		var myArr = xmlhttp5.responseText;
		var text = myArr;
		var json = JSON.parse(text);
		for(var i = 0; i < json.data.length; i++){
			var x = document.getElementById("library");
			var option = document.createElement("option");
			option.text = json.data[i][8] + " - " + json.data[i][9];
			x.add(option);
		}
	}
};