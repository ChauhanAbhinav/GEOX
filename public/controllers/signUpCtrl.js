angular.module('signUpCtrl',[])

.controller('SignUpController', function ($scope, signUpService) {
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
            signUpService.register($scope.user).then(function(log){
                if(log!="Sign up completed")
                alert(log);
            });
            
        }
        
    };
});