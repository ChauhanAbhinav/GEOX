angular.module("loginCtrl",["ui.router"])

	.controller("loginController",function($scope, loginService){
		//link color
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
			loginService.sendStudent($scope.studentData).then(function(log){
                if(log!="Student Login Successful")
                alert(log);
            });
		}
		$scope.admin=function(){
			$scope.submitted= "true";
			if ($scope.myForm.$valid)
			loginService.sendAdmin($scope.adminData).then(function(log){
                if(log!="Admin Login Successful")
                alert(log);
            });
		}
	});