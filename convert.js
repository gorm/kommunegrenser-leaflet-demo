tsv = require('tsv');
fs = require('fs');

function fixWktGeom(data) {
	var ret = [];
	if (data.match(/^POLYGON\(\((.*)\)\)/)) {
		var vals = RegExp.$1.split(/\,/);
		vals.forEach(function(v) {
			var geoPos = v.split(/\s+/);
			ret.push([parseFloat(geoPos[1]), parseFloat(geoPos[0])]);
		});
			
	}

	return ret;
}

function convertData(tsvData) {
	var json = [];
	var data = tsv.parse(tsvData);
	//console.log(data);
	if (data) {
		data.forEach(function(v) {
			if (v.wkt_geom != "") {
				json.push({
					KOMM: v.KOMM,
					wkt_geo: fixWktGeom(v.wkt_geom),
					NAVN: v.NAVN,
					FRI: v.ANSLAG_FRI
				})
			}
		});
	}
	return json;
}

fs.readFile("frieintekter.tsv", 'utf-8', function(err, data) {
	if (err) {
		return console.log(err);
	} 

	var json = convertData(data);
	
	console.log("data = " + JSON.stringify(json, null, " "));
});