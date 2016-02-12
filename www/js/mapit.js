

function initialize() {
	// Radius of circle

	//Zoom
	var k=eval(document.getElementById('rng').value);

	//Center
	myCity=new google.maps.LatLng(37.39, -121.95);
	var mapProp = {
		center:myCity,
		zoom:k,
		disableDefaultUI:false,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	//Map 
	var map=new google.maps.Map(document.getElementById("googleMapsOne"),mapProp);

	// Marker
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
