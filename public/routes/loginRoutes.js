angular.module('loginRoutes',[])

.config(function ($stateProvider, $urlRouterProvider) {

     $urlRouterProvider.when("","/student-login");
			$stateProvider
			.state("stud-login",{
				url:"/student-login",
				templateUrl:"views/student-login.html",
				controller: "loginController"

			})
			.state("admin-login",{
				url:"/admin-login",
				templateUrl:"views/admin-login.html",
				controller: "loginController"
			})
		});