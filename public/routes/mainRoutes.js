angular.module('mainRoutes',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
$urlRouterProvider.when("","/login");
$urlRouterProvider.when("/login","/login/student");
$urlRouterProvider.when("/dashboard","/dashboard/home");

$stateProvider
.state('login',{
	url: '/login',
	templateUrl: '/views/login.html',
	controller: "loginCtrl" 
})
.state('login.student',{
	url: '/student',
	templateUrl: '/views/student-login.html',
	controller: "loginCtrl" 
})
.state('login.admin',{
	url: '/admin',
	templateUrl: '/views/admin-login.html',
	controller: "loginCtrl" 
})
.state('signup',{
	url: '/signup',
	templateUrl: '/views/sign-up.html',
	controller: "signUpCtrl" 
})
.state('dashboard',{
	url: '/dashboard',
	templateUrl: '/views/dashboard.html',
	controller: "dashboardCtrl" 
})
.state('dashboard.home',{
	url: '/home',
	templateUrl: '/views/map.html',
	controller: "geolocCtrl" 
})
.state('dashboard.attendance',{
	url: '/view-attendance',
	templateUrl: '/views/attendance.html',
	 controller: "attendanceCtrl" 
})
.state('dashboard.profile',{
	url: '/profile',
	templateUrl: '/views/profile.html',
	controller: "profileCtrl" 
})
.state('dashboard.about',{
	url: '/about-geox',
	templateUrl: '/views/about.html',
	//controller: "aboutCtrl" 
})
})