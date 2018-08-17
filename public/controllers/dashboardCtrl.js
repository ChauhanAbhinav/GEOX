angular.module('dashboardCtrl',[])
.controller('dashboardCtrl',function(studentService, $scope, $rootScope, $state, $http){
$scope.authStudent = function(){
      studentService.authStudent()
      .then(function(data){
            if(data!="NULL")
            {
            $rootScope.student = data;
            $rootScope.checkTimer();
            $rootScope.checkMap();
            console.log("student auth is successful");
            }
            else
            {
            $state.go("login.student");
            console.log("student auth is unsuccessful");
            }
      },function(err){
            alert("Authorisation Unsuccessful");
            $state.go("login.student");
 });
}
$scope.authStudent();
$rootScope.startTimer = function(){
      $rootScope.timer = {};
      $rootScope.timer.count = 0;
      $rootScope.timerFlag = true;
      $rootScope.timer.interval = setInterval(function(){
            $rootScope.timer.count++;
            $rootScope.timer.hr = Math.floor($rootScope.timer.count/3600);
            $rootScope.timer.min = Math.floor(($rootScope.timer.count%3600)/60);
            $rootScope.timer.sec = Math.floor(($rootScope.timer.count%3600)%60);
            $rootScope.$apply();},1000);
    }
$rootScope.checkTimer = function(){
   if($rootScope.student)
   { 
      if(!$rootScope.timerFlag) { $rootScope.startTimer();}

   }
  };
 
$scope.logoutStudent = function(){
      studentService.logoutStudent()
      .then(function(data){
            $rootScope.student = null;
            $rootScope.timerFlag = false;
            clearInterval($rootScope.timer.interval);
            $rootScope.timer = {};
            $state.go("login.student");
            console.log("logout successful");
      },function(err){
            alert("logout unsuccessful");
            console.log("logout unsuccessful");
      });
}
$scope.closeNav = function (){
      var sidenav = document.getElementById("sidenav");
      var uiWrapper = document.getElementById("ui-wrapper");
      var opennav = document.getElementById("open-nav");
      sidenav.style.display = "none";
      uiWrapper.style.width = "100%";
      opennav.style.display = "inline";
}
$scope.openNav = function (){
     var sidenav = document.getElementById("sidenav");
      var uiWrapper = document.getElementById("ui-wrapper");
      var opennav = document.getElementById("open-nav");
      sidenav.style.display = "block";
      uiWrapper.style.width = "calc(100% - 140px)";
      opennav.style.display = "none";
     
}



});
