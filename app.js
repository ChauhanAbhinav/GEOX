//defining module
var myapp = angular.module('myapp', []);

//creating custom directive
myapp.directive('ngCompare', function () {
    return {
        require: 'ngModel',
        link: function (scope, currentEl, attrs, ctrl) {
            var comparefield = document.getElementsByName(attrs.ngCompare)[0]; //getting first element
            compareEl = angular.element(comparefield);

            //current field key up
            currentEl.on('keyup', function () {
                if (compareEl.val() != "") {
                    var isMatch = currentEl.val() === compareEl.val();
                    ctrl.$setValidity('compare', isMatch);
                    scope.$digest();
                }
            });

            //Element to compare field key up
            compareEl.on('keyup', function () {
                if (currentEl.val() != "") {
                    var isMatch = currentEl.val() === compareEl.val();
                    ctrl.$setValidity('compare', isMatch);
                    scope.$digest();
                }
            });
        }
    }
});

// create angular controller
myapp.controller('mainController', function ($scope) {

    $scope.techList = [
    { techId: 1, Name: 'iot' },
    { techId: 2, Name: 'angular js and node js' },
    { techId: 3, Name: 'ml' },
    { techId: 4, Name: 'big data' },
    { techId: 5, Name: 'java core' },
    { techId: 6, Name: 'java advance' },
    { techId: 7, Name: 'android' },
    { techId: 8, Name: 'hybrid framework' }
    ];

    $scope.batchList = [];

    $scope.$watch('user.tech', function (newVal, oldVal) {

        if (newVal == 1)
            $scope.batchList =  [
                                { techId: 1, batchId: 1, Name: '8:00 a.m to 10:00 a.m' },
                                { techId: 1, batchId: 2, Name: '10:00 a.m to 12:00 p.m' },
                                { techId: 1, batchId: 3, Name: '12:00 p.m to 2:00 p.m' },
                                { techId: 1, batchId: 4, Name: '2:00 p.m to 4:00p.m' },
                                { techId: 1, batchId: 5, Name: '4:00 p.m to 6:00 p.m' }];
        else if (newVal == 2)
            $scope.batchList = [
                                { techId: 2, batchId: 1, Name: '8:00 a.m to 10:00 a.m' },
                                { techId: 2, batchId: 2, Name: '10:00 a.m to 12:00 p.m' },
                                { techId: 2, batchId: 3, Name: '12:00 p.m to 2:00 p.m' },
                                { techId: 2, batchId: 4, Name: '2:00 p.m to 4:00p.m' },
                                { techId: 2, batchId: 5, Name: '4:00 p.m to 6:00 p.m' }];
       
else if (newVal == 3)
            $scope.batchList = [
                               { techId: 3, batchId: 1, Name: '8:00 a.m to 10:00 a.m' },
                                { techId: 3, batchId: 2, Name: '10:00 a.m to 12:00 p.m' },
                                { techId: 3, batchId: 3, Name: '12:00 p.m to 2:00 p.m' },
                                { techId: 3, batchId: 4, Name: '2:00 p.m to 4:00p.m' },
                                { techId: 3, batchId: 5, Name: '4:00 p.m to 6:00 p.m' }];    


else if (newVal == 4)
            $scope.batchList = [
                               { techId: 4, batchId: 1, Name: '8:00 a.m to 10:00 a.m' },
                                { techId: 4, batchId: 2, Name: '10:00 a.m to 12:00 p.m' },
                                { techId: 4, batchId: 3, Name: '12:00 p.m to 2:00 p.m' },
                                { techId: 4, batchId: 4, Name: '2:00 p.m to 4:00p.m' },
                                { techId: 4, batchId: 5, Name: '4:00 p.m to 6:00 p.m' }]; 

else if (newVal == 5)
            $scope.batchList = [
                               { techId: 5, batchId: 1, Name: '8:00 a.m to 10:00 a.m' },
                                { techId: 5, batchId: 2, Name: '10:00 a.m to 12:00 p.m' },
                                { techId: 5, batchId: 3, Name: '12:00 p.m to 2:00 p.m' },
                                { techId: 5, batchId: 4, Name: '2:00 p.m to 4:00p.m' },
                                { techId: 5, batchId: 5, Name: '4:00 p.m to 6:00 p.m' }];    

else if (newVal == 6)
            $scope.batchList = [
                               { techId: 6, batchId: 1, Name: '8:00 a.m to 10:00 a.m' },
                                { techId: 6, batchId: 2, Name: '10:00 a.m to 12:00 p.m' },
                                { techId: 6, batchId: 3, Name: '12:00 p.m to 2:00 p.m' },
                                { techId: 6, batchId: 4, Name: '2:00 p.m to 4:00p.m' },
                                { techId: 6, batchId: 5, Name: '4:00 p.m to 6:00 p.m' }];

else if (newVal == 7)
            $scope.batchList = [
                               { techId: 7, batchId: 1, Name: '8:00 a.m to 10:00 a.m' },
                                { techId: 7, batchId: 2, Name: '10:00 a.m to 12:00 p.m' },
                                { techId: 7, batchId: 3, Name: '12:00 p.m to 2:00 p.m' },
                                { techId: 7, batchId: 4, Name: '2:00 p.m to 4:00p.m' },
                                { techId: 7, batchId: 5, Name: '4:00 p.m to 6:00 p.m' }];    
    
else if (newVal == 8)
            $scope.batchList = [
                               { techId: 8, batchId: 1, Name: '8:00 a.m to 10:00 a.m' },
                                { techId: 8, batchId: 2, Name: '10:00 a.m to 12:00 p.m' },
                                { techId: 8, batchId: 3, Name: '12:00 p.m to 2:00 p.m' },
                                { techId: 8, batchId: 4, Name: '2:00 p.m to 4:00p.m' },
                                { techId: 8, batchId: 5, Name: '4:00 p.m to 6:00 p.m' }];    




        else
            $scope.batchList = [];
    });

    // function to submit the form after all validation has occurred			
    $scope.submitForm = function () {

        // Set the 'submitted' flag to true
        $scope.submitted = true;

        if ($scope.userForm.$valid) {
            alert("Form is valid!");
        }
        else {
            alert("Please correct errors!");
        }
    };
});
