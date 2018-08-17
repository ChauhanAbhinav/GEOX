angular.module('geolocCtrl',[])
.controller('geolocCtrl',function($scope, $rootScope, $http, $window,  Map){
			$scope.pos = {};
      $scope.cdac = {lat: 26.788286, lng: 75.827287};
      $scope.test = {lat: 26.805644, lng: 75.798769};//temp loc
      
		 $scope.showLocation = function (position) {
			$scope.pos.lat=position.coords.latitude;
 		   	$scope.pos.lng=position.coords.longitude;
 		   	$scope.$apply(); //refresh the binding
 		  	Map.addMarkers($scope.test);
        console.log("location found");
 		   	$scope.validateLocation();
        $scope.getLocationUpdate();
 		 }
        $scope.updateLocation = function (position){
        $scope.pos.lat=position.coords.latitude;
 		   	$scope.pos.lng=position.coords.longitude;
 		   	//alert("Latitude : " + $scope.pos.lat + " Longitude: " + $scope.pos.lng);
 		   	$scope.$apply();
        console.log("location updated");
 		   	Map.userMarker.setPosition($scope.test);
 		  	$scope.validateLocation(); 
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
        $scope.validateLocation = function (){
      if(!$rootScope.attendance)
          if(($scope.test.lat>=26.805413 && $scope.test.lat<= 26.805854)&&($scope.test.lng>=75.798464 && $scope.test.lng<= 75.799156))
          //if(($scope.pos.lat>=26.788134 && $scope.pos.lat<= 26.788336)&&($scope.pos.lng>=75.827062 && $scope.pos.lng<= 75.827437))
            {
                 
                 $rootScope.attendance = true;
                 alert('Attendance Successful');
            }
          else
            {

            }
    }
  
  $rootScope.checkMap = function()
  {
   if($rootScope.student)
   {  Map.init($scope.test); //initilize the map at cdac
      Map.addFence();  
      $scope.getCurrentLocation();
  }
  };
  $rootScope.checkMap();
    
     $scope.goToLoc = function (){
				Map.map.panTo($scope.pos);
				}		
		$scope.goToCent = function (){
				Map.map.panTo($scope.test);
			}
		});