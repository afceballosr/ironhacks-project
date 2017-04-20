var map;
function initMap() {
	var mapOptions = {
		zoom: 14,
		center: new google.maps.LatLng(41.8708,-87.6505),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

    map = new google.maps.Map(document.getElementById('chicagomap'), mapOptions);

	var marker = new google.maps.Marker({
	    position: new google.maps.LatLng(41.8708,-87.6505),
	    title: '0'
	});
	
	marker.setMap(map);
	
	connectHome(map);
	if (document.getElementById('police').checked) {
		connectPoliceStations(map);
	}
	if (document.getElementById('market').checked) {
		connectFarmerMarkets(map);
	}
	if (document.getElementById('fireman').checked) {
		connectFireStations(map);
	}
	if (document.getElementById('books').checked) {
		connectLibraries(map);
	}
	if (document.getElementById('bikes').checked) {
		connectBikeRacks(map);
	}
	if (document.getElementById('condoms').checked) {
		connectCondomSites(map);
	}
	if (document.getElementById('warming').checked) {
		connectWarmingCenters(map);
	}
	if (document.getElementById('crimes').checked) {
		connectCrimeMap(map);
	}
}

function connectPoliceStations(map){
	var xmlhttp2 = new XMLHttpRequest(); 
	var url = "https://data.cityofchicago.org/api/views/z8bn-74gv/rows.json?accessType=DOWNLOAD";
	xmlhttp2.open("GET", url, true);
	xmlhttp2.send();

	xmlhttp2.onreadystatechange = function() {
		if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200) {
			var myArr = xmlhttp2.responseText;
			var text = myArr;
			var json = JSON.parse(text);
			for(var i = 0; i < json.data.length; i++){
				var psmarker = new google.maps.Marker({
					position: new google.maps.LatLng(json.data[i][20], json.data[i][21]),
					title: 'ps'+(i+1),
					icon: 'images/PoliceStation.png'
				});
				psmarker.setMap(map);
			}
		}
	};
}

function connectFarmerMarkets(map){
	var xmlhttp3 = new XMLHttpRequest(); 
	var url = "https://data.cityofchicago.org/api/views/x5xx-pszi/rows.json?accessType=DOWNLOAD";
	xmlhttp3.open("GET", url, true);
	xmlhttp3.send();

	xmlhttp3.onreadystatechange = function() {
		if (xmlhttp3.readyState == 4 && xmlhttp3.status == 200) {
			var myArr = xmlhttp3.responseText;
			var text = myArr;
			var json = JSON.parse(text);
			for(var i = 0; i < json.data.length; i++){
				var fmmarker = new google.maps.Marker({
					position: new google.maps.LatLng(json.data[i][18], json.data[i][19]),
					title: 'fm'+(i+1),
					icon: 'images/FarmerMarket.png'
				});
				fmmarker.setMap(map);
			}
		}
	};
}

function connectFireStations(map){
	var xmlhttp4 = new XMLHttpRequest();
	var url = "https://data.cityofchicago.org/api/views/28km-gtjn/rows.json?accessType=DOWNLOAD";
	xmlhttp4.open("GET", url, true);
	xmlhttp4.send();

	xmlhttp4.onreadystatechange = function() {
		if (xmlhttp4.readyState == 4 && xmlhttp4.status == 200) {
			var myArr = xmlhttp4.responseText;
			var text = myArr;
			var json = JSON.parse(text);
			for(var i = 0; i < json.data.length; i++){
				var fsmarker = new google.maps.Marker({
					position: new google.maps.LatLng(json.data[i][14][1], json.data[i][14][2]),
					title: 'fs'+(i+1),
					icon: 'images/FireStation.png'
				});
				fsmarker.setMap(map);
			}
		}
	};
}

function connectLibraries(map){
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
				var lbmarker = new google.maps.Marker({
					position: new google.maps.LatLng(json.data[i][18][1], json.data[i][18][2]),
					title: 'lb'+(i+1),
					icon: 'images/Library.png'
				});
				lbmarker.setMap(map);
			}
		}
	};
}

function connectHome(map){
	var xmlhttp6 = new XMLHttpRequest();
	var url = "https://data.cityofchicago.org/api/views/s6ha-ppgi/rows.json?accessType=DOWNLOAD";
	xmlhttp6.open("GET", url, true);
	xmlhttp6.send();

	xmlhttp6.onreadystatechange = function() {
		if (xmlhttp6.readyState == 4 && xmlhttp6.status == 200) {
			var myArr = xmlhttp6.responseText;
			var text = myArr;
			var json = JSON.parse(text);
			for(var i = 0; i < json.data.length; i++){
				var hmamarker = new google.maps.Marker({
					position: new google.maps.LatLng(json.data[i][19], json.data[i][20]),
					title: 'hma'+(i+1),
					icon: 'images/Home.png'
				});
				hmamarker.setMap(map);
			}
		}
	};
}

function connectBikeRacks(map){
	var xmlhttp7 = new XMLHttpRequest();
	var url = "https://data.cityofchicago.org/api/views/cbyb-69xx/rows.json?accessType=DOWNLOAD";
	xmlhttp7.open("GET", url, true);
	xmlhttp7.send();

	xmlhttp7.onreadystatechange = function() {
		if (xmlhttp7.readyState == 4 && xmlhttp7.status == 200) {
			var myArr = xmlhttp7.responseText;
			var text = myArr;
			var json = JSON.parse(text);
			for(var i = 0; i < json.data.length; i++){
				var brmarker = new google.maps.Marker({
					position: new google.maps.LatLng(json.data[i][14], json.data[i][15]),
					title: 'br'+(i+1),
					icon: 'images/BikeRack.png'
				});
				brmarker.setMap(map);
			}
		}
	};
}

function connectCondomSites(map){
	var xmlhttp8 = new XMLHttpRequest();
	var url = "https://data.cityofchicago.org/api/views/azpf-uc4s/rows.json?accessType=DOWNLOAD";
	xmlhttp8.open("GET", url, true);
	xmlhttp8.send();

	xmlhttp8.onreadystatechange = function() {
		if (xmlhttp8.readyState == 4 && xmlhttp8.status == 200) {
			var myArr = xmlhttp8.responseText;
			var text = myArr;
			var json = JSON.parse(text);
			for(var i = 0; i < json.data.length; i++){
				var cdmarker = new google.maps.Marker({
					position: new google.maps.LatLng(json.data[i][14][1], json.data[i][14][2]),
					title: 'cd'+(i+1),
					icon: 'images/CondomSite.png'
				});
				cdmarker.setMap(map);
			}
		}
	};
}

function connectWarmingCenters(map){
	var xmlhttp9 = new XMLHttpRequest();
	var url = "https://data.cityofchicago.org/api/views/h243-v2q5/rows.json?accessType=DOWNLOAD";
	xmlhttp9.open("GET", url, true);
	xmlhttp9.send();

	xmlhttp9.onreadystatechange = function() {
		if (xmlhttp9.readyState == 4 && xmlhttp9.status == 200) {
			var myArr = xmlhttp9.responseText;
			var text = myArr;
			var json = JSON.parse(text);
			for(var i = 0; i < json.data.length; i++){
				var wcmarker = new google.maps.Marker({
					position: new google.maps.LatLng(json.data[i][31][1], json.data[i][31][2]),
					title: 'wc'+(i+1),
					icon: 'images/Warming.png'
				});
				wcmarker.setMap(map);
			}
		}
	};
}

function connectCrimeMap(map){
	var xmlhttp10 = new XMLHttpRequest();
	var url = "https://data.cityofchicago.org/api/views/ijzp-q8t2/rows.json?accessType=DOWNLOAD";
	xmlhttp10.open("GET", url, true);
	xmlhttp10.send();

	xmlhttp10.onreadystatechange = function() {
		if (xmlhttp10.readyState == 4 && xmlhttp10.status == 200) {
			var myArr = xmlhttp10.responseText;
			var text = myArr;
			var json = JSON.parse(text);
			for(var i = 0; i < json.data.length; i++){
				var crmarker = new google.maps.Marker({
					position: new google.maps.LatLng(json.data[i][27], json.data[i][28]),
					title: 'cr'+(i+1),
					icon: 'images/Crime.png'
				});
				crmarker.setMap(map);
			}
		}
	};
}

