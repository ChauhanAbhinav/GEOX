angular.module('geolocCtrl',[])
.controller('geolocCtrl',function($http, $window, $scope, Map){
			$scope.pos = {};
			$scope.cdac = {lat: 26.788286, lng: 75.827287}; 
			//$scope.pos1={lat: 26.788336, lng: 75.827437};
 		   	
		$scope.showLocation = function (position) {
			$scope.pos.lat=position.coords.latitude;
 		   	$scope.pos.lng=position.coords.longitude;
 		   	$scope.$apply(); //refresh the binding
 		   	Map.init($scope.cdac); //initilize the map at cdac
 		   	Map.addMarkers($scope.pos);
 		   	Map.addFence();
 		   	$scope.getLocationUpdate();
 		   	$scope.validateLocation();
 		 }
         $scope.updateLocation = function (position){
         	$scope.pos.lat=position.coords.latitude;
 		   	$scope.pos.lng=position.coords.longitude;
 		   	//alert("Latitude : " + $scope.pos.lat + " Longitude: " + $scope.pos.lng);
 		   	$scope.$apply();
 		   	Map.userMarker.setPosition($scope.pos);
 		  	$scope.validateLocation(); 
 		}
 		$scope.validateLocation = function (){
 			if(($scope.pos.lat>=26.788134 && $scope.pos.lat<= 26.788336)&&($scope.pos.lng>=75.827062 && $scope.pos.lng<= 75.827437))
 			{
 				alert('Attendance Successful');
 			}
 			else
 			{

 			}
 		}
         $scope.errorHandler = function (error) {
           
            switch(error.code)
    		{
        	case error.TIMEOUT:
            alert("The request to get user location has aborted as it has taken too long.");
            break;
			case error.POSITION_UNAVAILABLE:
            alert("Location information is not available.");
            break;
			case error.PERMISSION_DENIED:
            alert("Permission to share location information has been denied!");
            break;
			default:
            alert("An unknown error occurred.");
    		}
         }
        $scope.getLocationUpdate = function (){
    			        
               var options = {enableHighAccuracy: true};
               geoLoc = navigator.geolocation;
               wid = geoLoc.watchPosition($scope.updateLocation, $scope.errorHandler, options);
             
         }
         $scope.getCurrentLocation = function (){
            
            if($window.navigator.geolocation){
               var options = {enableHighAccuracy: true
               	};
               geoLoc = navigator.geolocation;

               geoLoc.getCurrentPosition($scope.showLocation, $scope.errorHandler, options);
             
            } else {
               alert("Sorry, browser does not support geolocation!");
            }
         }
         $scope.getCurrentLocation();
         
         $scope.goToLoc = function (){
				Map.map.panTo($scope.pos);
				}		
		$scope.goToCent = function (){
				Map.map.panTo($scope.cdac);
			}
		
		});