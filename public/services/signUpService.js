angular.module('signUpService',[])

.service('signUpService',function($http){
        return {
        register : function(data) {    
            return $http.post('/register',data)
            .then(function(response) {
                //console.log("coming from servicejs", response.data);
                return response.data;
            });
        }
    };
});