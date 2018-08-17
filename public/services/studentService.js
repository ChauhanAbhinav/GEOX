angular.module("studentService",[])

.service('studentService',function ($http) {
	return{
		authStudent: function(){
			return $http.get('/authStudent')
				.then(function(response){
					return response.data;
				});
		},
		logoutStudent: function(){
			return $http.get('/logoutStudent')
				.then(function(response){
					return response.data;
				});
		}
	}
});