angular.module("profileCtrl",["ui.router"])

	.controller("profileCtrl",function($scope, studentService){

$scope.studentData = function(){
   studentService.studentData()
      .then(function(data){
         $scope.stud = data;
      });
}
$scope.studentData();
//ctrl end	
});