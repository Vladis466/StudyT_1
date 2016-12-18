/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false */
/*jshint browser:true */
/*jslint smarttabs:true */
/*global $ */

function initialize() {


	//Zoom
	//var k=eval(document.getElementById('rng').value);

	//get users location to center the map on will be kept as var userlocation
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
	var llarr = userLocation.split(",").map(Number);
	//Center
	var myCity=new google.maps.LatLng(llarr[0], llarr[1]);
	var mapProp = {
		center:myCity,
		zoom:5,
		disableDefaultUI:false,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	//Map 
	var map=new google.maps.Map(document.getElementById("googleMapsOne"),mapProp);
	
		// Get each long/lat and date stamp combo for unique time study instances.
		// Use these to pin the location of said studies in the world!!
		var obj = mapdata.value_sets;
	
	
	

		var cnt = 0;
		var infowindow = [];
		var mark = [];
		var bounds = new google.maps.LatLngBounds();
	
		for (var prop in obj) {
			// skip loop if the property is from prototype
			if(!obj.hasOwnProperty(prop)) continue;

			var templocs = prop.split(",").map(Number);
			console.log(templocs[0]);
			var temppos = new google.maps.LatLng(templocs[0], templocs[1]);
			
			
			mark[cnt] = new google.maps.Marker({
				position: temppos,
				map: map,
				animation:google.maps.Animation.BOUNCE,	
			});			
			
			var iso_to_local = new Date(obj[prop][0]);
			infowindow[cnt] = new google.maps.InfoWindow({
				content: "date taken: " + iso_to_local.toString() + "<br>" + "User: " + obj[prop][1],
				maxWidth: 200
			});			
			

			google.maps.event.addListener(mark[cnt], 'click', (function(currmark, cnt) {
			  return function() {
				infowindow[cnt].open(map, mark[cnt]);
			  };
			})(mark[cnt], cnt));
			
			bounds.extend(mark[cnt].getPosition());

			cnt++;
		}
			
			
			
			
	
	// Current Location Marker
	if(document.getElementById('mkr'))
	{
		var marker=new google.maps.Marker({
			position:myCity,
			map: map,
			animation:google.maps.Animation.BOUNCE,
			title: 'Hello World!'
	});
	marker.setMap(map);
	}
}




	google.maps.event.addDomListener(window, 'load', initialize);
