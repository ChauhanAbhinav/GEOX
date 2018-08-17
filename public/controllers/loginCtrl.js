angular.module("loginCtrl",["ui.router"])

	.controller("loginCtrl",function($scope, studentService, $state, $rootScope, $window, $location, loginService){
	$scope.authStudent = function(){
      studentService.authStudent()
      .then(function(data){
            if(data!="NULL")
            {
            $rootScope.student = data;
            $state.go("dashboard.home");
            console.log("student auth is successful");
            }
            else
            {
             console.log("student auth is unsuccessful");
            }
      },function(err){
            alert("Authorisation Unsuccessful");
 });
}
$scope.authStudent();
		$scope.selectStud="active-link";
		$scope.selectAdmin="in-active-link";
		$scope.changeColor=function(type){
			if (type=="student") {
			$scope.selectStud="active-link";
			$scope.selectAdmin="in-active-link";
			} else
			{
			$scope.selectAdmin="active-link";
			$scope.selectStud="in-active-link";
			}
		};
		//form
		$scope.studentData={};
		$scope.adminData={};

		$scope.student=function(){
			$scope.submitted= "true";
			if ($scope.myForm.$valid)
			loginService.sendStudent($scope.studentData)
			.then(function(data){
                if(data=="Username or Password Incorrect"||data=="Wrong Center Id")
                alert(data);
            else
            	{	
            		$rootScope.student=data;
            		$state.go('dashboard.home');

            		console.log($rootScope.student.username);

           		}
            });
		}
		$scope.admin=function(){
			$scope.submitted= "true";
			if ($scope.myForm.$valid)
			loginService.sendAdmin($scope.adminData).then(function(data){
                if(data=="Admin Login Successful")
                console.log(data);
            else
            	alert(data);
            });
		}

		$scope.toSignup=function(){
			$state.go('signup');
	}

$scope.initMap = function() {
 var pos = {lat: 26.7880, lng: 75.8275};
  var map = new google.maps.Map(
      document.getElementById('login-map'), {
      	zoom: 15, 
      	center: pos,
      	 styles : [{"elementType":"geometry","stylers":[{"color":"#212121"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#212121"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#757575"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#181818"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"color":"#1b1b1b"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#8a8a8a"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#373737"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#3c3c3c"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#3d3d3d"}]}],
      	disableDefaultUI: true	

      });
}
$scope.initMap();
	});