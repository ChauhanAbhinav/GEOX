angular.module('loginService',[])

.service('loginService',function($http){
		return {
			sendStudent : function(data){
				return $http.post('/student-login',data)
				.then(function(response){
					return response.data;
				});
				},
				sendAdmin : function(data){
				return $http.post('/admin-login',data)
				.then(function(response){
						return response.data;
					});
				}
			}
				
		});