app.controller("Myloginctrl",function($scope)
{

	$scope.loginenable=true;
	$scope.Valid=function(user)
	{
		$scope.loginenable=false;
		$scope.username=user.name;
		$scope.$emit('eventinlogin',$scope.username);
	};
});
