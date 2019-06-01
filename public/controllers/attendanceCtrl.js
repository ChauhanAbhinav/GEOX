angular.module("attendanceCtrl",["ui.router"])

	.controller("attendanceCtrl",function($scope, studentService){
	$scope.showAttendance = function(){
      studentService.showAttendance()
      .then(function(data){
          $scope.attendList=data;

      },function(err){
           
 	});
}
$scope.showAttendance();
//ctrl end	
});