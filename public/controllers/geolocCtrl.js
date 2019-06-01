angular.module('geolocCtrl',[])
.controller('geolocCtrl',function($scope, $rootScope, $http, $window, Map, studentService){
			$scope.center = {lat: 26.788286, lng: 75.827287};//center loc
      $scope.test = {lat: 26.805644, lng: 75.798769};//temp user loc
      

		 $scope.showLocation = function (position) {
			  $rootScope.pos = {};
        $rootScope.pos.lat=position.coords.latitude;
 		   	$rootScope.pos.lng=position.coords.longitude;
 		   	$rootScope.$apply(); //refresh the binding
 		  	if(Map.userMarker)
           Map.userMarker.setPosition($rootScope.pos);
        else
           Map.addMarkers($rootScope.pos, google.maps.Animation.DROP);
        console.log("location found");
 		   	//validateLocation();
        $scope.getLocationUpdate();

 		 }
        $scope.updateLocation = function (position){
        $rootScope.pos.lat=position.coords.latitude;
 		   	$rootScope.pos.lng=position.coords.longitude;
 		   	//alert("Latitude : " + $scope.pos.lat + " Longitude: " + $scope.pos.lng);
 		   	$rootScope.$apply();
        console.log("location updated");
 		   	Map.userMarker.setPosition($rootScope.pos);
        //validateLocation();
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

          $scope.getCurrentLocation = function (){
            if($window.navigator.geolocation){
               var options = {enableHighAccuracy: true
              };
                geoLoc = navigator.geolocation;
                geoLoc.getCurrentPosition($scope.showLocation, $scope.errorHandler, options);
                if($rootScope.pos) 
                 Map.addMarkers($rootScope.pos);
                console.log(" getCurrentLocation function invoked");             
            } else {
               alert("Sorry, browser does not support geolocation!");
            }
         }
     $scope.getLocationUpdate = function (){
    			     console.log(" getLocationUpdate function invoked")
               var options = {enableHighAccuracy: true};
               geoLoc = navigator.geolocation;
               wid = geoLoc.watchPosition($scope.updateLocation, $scope.errorHandler, options);
             
         }
        $rootScope.validateLocation = function (){
          //alert("validateLocation invoked");
      if(1)
          //if(($rootScope.pos.lat>=26.805413 && $rootScope.pos.lat<= 26.805854)&&($rootScope.pos.lng>=75.798464 && $rootScope.pos.lng<= 75.799156)) //temp loc checking
          if(($rootScope.pos.lat>=26.788134 && $rootScope.pos.lat<= 26.788336)&&($rootScope.pos.lng>=75.827062 && $rootScope.pos.lng<= 75.827437))
            {
                return "valid";
            }
           else
            {
                  return "notValid";
            }
    }
  
  $rootScope.checkMap = function()
  {
   if($rootScope.student)
   {  Map.init($scope.center); //initilize the map at cdac
      Map.addFence();  
      $scope.getCurrentLocation();
  }
  };
  $rootScope.checkMap();
    
     $scope.goToLoc = function (){
				Map.map.panTo($rootScope.pos);
				}		
		$scope.goToCent = function (){
				Map.map.panTo($scope.center);
			}
		});