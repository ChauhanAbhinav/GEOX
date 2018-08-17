angular.module('signUpCtrl',[])

.controller('signUpCtrl', function ($scope, $state, $rootScope, studentService, signUpService) {

    $scope.user={};
    $scope.techList = [
    { techId: 1, Name: 'Internet of things' },
    { techId: 2, Name: 'AngularJS and NodeJS' },
    { techId: 3, Name: 'ML' },
    { techId: 4, Name: 'Big Data' },
    { techId: 5, Name: 'Java Core' },
    { techId: 6, Name: 'Java Advance' },
    { techId: 7, Name: 'Android' },
    { techId: 8, Name: 'Hybrid Framework' }
    ];

    $scope.batchList = [];

    $scope.$watch('user.tech', function (newVal, oldVal) {

        if (newVal == 'Internet of things')
            $scope.batchList =  [
                                { techId: 1, batchId: 1, Name: '8 AM to 10 AM' },
                                { techId: 1, batchId: 2, Name: '10 AM to 12 PM' },
                                { techId: 1, batchId: 3, Name: '12 PM to 2 PM' },
                                { techId: 1, batchId: 4, Name: '2 PM to 4 PM' },
                                { techId: 1, batchId: 5, Name: '4 PM to 6 PM' }];
        else if (newVal == 'AngularJS and NodeJS')
            $scope.batchList = [
                                { techId: 2, batchId: 1, Name: '8 AM to 10 AM' },
                                { techId: 2, batchId: 2, Name: '10 AM to 12 PM' },
                                { techId: 2, batchId: 3, Name: '12 PM to 2 PM' },
                                { techId: 2, batchId: 4, Name: '2 PM to 4 PM' },
                                { techId: 2, batchId: 5, Name: '4 PM to 6 PM' }];
       
else if (newVal == 'ML')
            $scope.batchList = [
                               { techId: 3, batchId: 1, Name: '8 AM to 10 AM' },
                                { techId: 3, batchId: 2, Name: '10 AM to 12 PM' },
                                { techId: 3, batchId: 3, Name: '12 PM to 2 PM' },
                                { techId: 3, batchId: 4, Name: '2 PM to 4 PM' },
                                { techId: 3, batchId: 5, Name: '4 PM to 6 PM' }];    


else if (newVal == 'Big Data')
            $scope.batchList = [
                               { techId: 4, batchId: 1, Name: '8 AM to 10 AM' },
                                { techId: 4, batchId: 2, Name: '10 AM to 12 PM' },
                                { techId: 4, batchId: 3, Name: '12 PM to 2 PM' },
                                { techId: 4, batchId: 4, Name: '2 PM to 4 PM' },
                                { techId: 4, batchId: 5, Name: '4 PM to 6 PM' }]; 

else if (newVal == 'Java Core')
            $scope.batchList = [
                               { techId: 5, batchId: 1, Name: '8 AM to 10 AM' },
                                { techId: 5, batchId: 2, Name: '10 AM to 12 PM' },
                                { techId: 5, batchId: 3, Name: '12 PM to 2 PM' },
                                { techId: 5, batchId: 4, Name: '2 PM to 4 PM' },
                                { techId: 5, batchId: 5, Name: '4 PM to 6 PM' }];    

else if (newVal == 'Java Advance')
            $scope.batchList = [
                               { techId: 6, batchId: 1, Name: '8 AM to 10 AM' },
                                { techId: 6, batchId: 2, Name: '10 AM to 12 PM' },
                                { techId: 6, batchId: 3, Name: '12 PM to 2 PM' },
                                { techId: 6, batchId: 4, Name: '2 PM to 4 PM' },
                                { techId: 6, batchId: 5, Name: '4 PM to 6 PM' }];

else if (newVal == 'Android')
            $scope.batchList = [
                               { techId: 7, batchId: 1, Name: '8 AM to 10 AM' },
                                { techId: 7, batchId: 2, Name: '10 AM to 12 PM' },
                                { techId: 7, batchId: 3, Name: '12 PM to 2 PM' },
                                { techId: 7, batchId: 4, Name: '2 PM to 4 PM' },
                                { techId: 7, batchId: 5, Name: '4 PM to 6 PM' }];    
    
else if (newVal == 'Hybrid Framework')
            $scope.batchList = [
                               { techId: 8, batchId: 1, Name: '8 AM to 10 AM' },
                                { techId: 8, batchId: 2, Name: '10 AM to 12 PM' },
                                { techId: 8, batchId: 3, Name: '12 PM to 2 PM' },
                                { techId: 8, batchId: 4, Name: '2 PM to 4 PM' },
                                { techId: 8, batchId: 5, Name: '4 PM to 6 PM' }];    




        else
            $scope.batchList = [];
    });
    
    $scope.submitForm = function () {

        // Set the 'submitted' flag to true
        $scope.submitted = true;
        
        if ($scope.userForm.$valid) {   
            signUpService.register($scope.user).then(function(data){
                if(data=="Wrong center Id"||data=="Wrong enrollment number")
                alert(data);
                else
                {
                    $rootScope.student=data;
                    $state.go("dashboard.home");
                }
            });
            
        }
        
    };
    $scope.toLogin=function(){
            $state.go('login.student');
    }
$scope.initMap = function() {
 var pos = {lat: 26.7880, lng: 75.8275};
  var map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 15, 
        center: pos,
        styles : [{"elementType":"geometry","stylers":[{"color":"#212121"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#212121"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#757575"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#181818"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"color":"#1b1b1b"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#8a8a8a"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#373737"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#3c3c3c"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#3d3d3d"}]}],
        disableDefaultUI: true  

      });
}
$scope.initMap();

});