angular.module('mapService',[])

.service('Map', function() {
    
    this.init = function(cent) {
        var options = {
            center: cent,
            zoom: 19,
            disableDefaultUI: false    
        }
        this.map = new google.maps.Map(
            document.getElementById("map"), options
        );
       
    }
      this.addMarkers = function(pos) {
        //if(this.marker) this.marker.setMap(null); // this will remove previous marker
        
        this.userMarker = new google.maps.Marker({
            map: this.map,
            position: pos,
            icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
            title: 'Your location',
            animation: google.maps.Animation.DROP
        });
    //     var infowindow = new google.maps.InfoWindow({
    // 	content: "<span style='font-size:12px'>Your Location</span>"
  		// });
    //     infowindow.open(this.map, this.userMarker)
        }
       this.addFence = function(){
       	var tl = new google.maps.LatLng(26.788336, 75.827062);
  		var tr = new google.maps.LatLng(26.788336, 75.827437);
  		var br = new google.maps.LatLng(26.788134, 75.827437);
  		var bl = new google.maps.LatLng(26.788134, 75.827062);

  		var cdac = new google.maps.Polygon({
    	path: [tl, tr, br, bl],
    	strokeColor: "#ff0000",
   		strokeOpacity: 0.8,
    	strokeWeight: 2,
    	fillColor: "#ff0000",
    	fillOpacity: 0.4,
    	title: 'cdac'
  		});
  		cdac.setMap(this.map);
  		var infowindowCdac = new google.maps.InfoWindow({
    	content: "<span style='font-size:12px'>Reach here for <br>attendance</span>",
    	position: {lat: 26.788298, lng:  75.827143}
  		});
        infowindowCdac.open(this.map)
        }
    
});