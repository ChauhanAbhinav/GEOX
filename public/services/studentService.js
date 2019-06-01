angular.module("studentService",[])

.service('studentService',function ($http) {
	return{
		authStudent: function(){
			return $http.get('/authStudent')
				.then(function(response){
					return response.data;
				});
		},
		studentData: function(){
			return $http.get('/studentData')
				.then(function(response){
					return response.data;
				});
		},
		logoutStudent: function(){
			return $http.get('/logoutStudent')
				.then(function(response){
					return response.data;
				});
		},
		tickAttendance: function(){
			return $http.get('/attendance')
				.then(function(response){
					return response.data;
				});
		},
		showAttendance: function(){
			return $http.get('/showAttendance')
				.then(function(response){
					return response.data;
				});
		},
		updateData: function(data){
			return $http.post('/updateData',data)
				.then(function(response){
					return response.data;
				});
		}
	}
});