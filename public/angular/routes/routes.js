myApp.config(['$routeProvider' , '$httpProvider' , function($routeProvider , $httpProvider){

	$routeProvider
	.when('/' , {
		templateUrl:'./views/index.html' ,
		controller: 'indexCtrl',
		controllerAs: 'index'
	})
	.when('/dashboard/:userId',{
		templateUrl:'views/dashboard.html' ,
		controller: 'dashCtrl',
		controllerAs: 'dashboard'
	})
	.when('/create/:userId',{
		templateUrl:'views/create.html' ,
		controller: 'createCtrl',
		controllerAs: 'create'
	})
	.when('/query/:tno/:userId', {
		templateUrl:'views/chatPanel.html' ,
		controller: 'singleCtrl',
		controllerAs: 'single'
	})
	.otherwise({
		template:'<p></br><h2 class="well" style="margin: 10%;">404, page not found</br></h2></p>'
	});
}]);
