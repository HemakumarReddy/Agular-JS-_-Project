
app.controller("Mymainctrl",function($scope)
{
	$scope.header=false;
	$scope.footer=false;
	$scope.nav=false;
		
	$scope.$on("eventinlogin", function(event, data){
		$scope.message = data;
		$scope.header=true;
		$scope.footer=true;
		$scope.nav=true;
	});
});


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
	.when("/Home", {
        templateUrl : 'views/loginpage.html'
		
    })
    .when("/Home", {
        templateUrl : 'views/Home.html'
		
    })
	.when("/About", {
        templateUrl : 'views/about.html'
		
		})
	.when("/Services", {
		templateUrl : 'views/Services.html'	
	})
	.when("/Contact", {
		templateUrl : 'views/contact.html'
	})
	.otherwise({
		templateUrl : 'views/loginpage.html'		
    });
	$locationProvider.html5Mode(true).hashPrefix('!');
	
});