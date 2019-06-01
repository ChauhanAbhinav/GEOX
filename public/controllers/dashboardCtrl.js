angular.module('dashboardCtrl',[])
.controller('dashboardCtrl',function(studentService, $scope, $rootScope, $state, $http){
$scope.authStudent = function(){
      studentService.authStudent()
      .then(function(data){
            if(data!="NULL")
            {
            $rootScope.student = data;
            //$rootScope.checkTimer();
            $rootScope.checkMap();
            if(!$rootScope.checkAttendanceIntervalFlag)
            $rootScope.checkAttendanceInterval();
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
            $rootScope.$apply();
            if(!$rootScope.attendance)
            if($rootScope.timer.count >= 10)
                  {     if($rootScope.validateLocation() == "valid")
                        {     studentService.tickAttendance()
                              .then(function(data){
                              $rootScope.attendance = true;
                              clearInterval($rootScope.attendanceInterval);
                              alert('Attendance Successful'); 
                              },function(err){
                              alert('Attendance Not Successful');
                              });
                        }
                         else
                              {  if(!$rootScope.notificationFlag) {
                                 alert("Attendance not successful, you had not stayed in parameter for atleast 1 hr"); $rootScope.notificationFlag = true;
                                    }
                              }
                  }
           
      },1000);
    }
$rootScope.checkTimer = function(){
   if($rootScope.student)
   { 
      if(!$rootScope.timerFlag) { $rootScope.startTimer();}

   }
  };
 
 $rootScope.checkAttendanceInterval = function(){
      //alert("checkAttendanceInterval started");
  $rootScope.attendanceInterval = setInterval(function(){
      if(!$rootScope.notificationInfoFlag) {alert("Stay in parameter for atleast 1 hr for successful attendance"); $rootScope.notificationInfoFlag = true;}
            if($rootScope.validateLocation() == "valid")
            {
                 $rootScope.checkTimer();
            }
            else
            {}
      },1000); 
  $rootScope.checkAttendanceIntervalFlag = true;   
 }
$scope.logoutStudent = function(){
      studentService.logoutStudent()
      .then(function(data){
            clearInterval($rootScope.attendanceInterval);
            if($rootScope.timerFlag) {
               clearInterval($rootScope.timer.interval);
               $rootScope.timerFlag = false;
            }
            $rootScope.checkAttendanceIntervalFlag = false;
            $rootScope.notificationInfoFlag = false;
            $rootScope.notificationFlag = false;
            $rootScope.attendance = false;
            $rootScope.timer = {};
            $rootScope.student = null;
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
