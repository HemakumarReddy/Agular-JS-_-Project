app.controller("myRegform",["$scope","$localStorage", function($scope,$localStorage){
	var arrayData=[];
	$scope.val=$localStorage.regData;
	$scope.user={};
	$scope.IsVisible=true;
	
	//$scope.user={};		//2/1/17
	//$scope.user.id=0; //2/1/17
	$scope.user.id=0;
	$scope.Reg=function(user1)
	
	
	
	{
		user1.id=arrayData.length+1;
		//user1.id=$scope.user.id+1;  //2/1/17
		//arrayData.push(user);
		//$scope.hema.user=user1;
		//arrayData.push({id:user.id,firstName:user.firstName, lastName:user.lastName,email:user.email, address:user.address}); //29/10/17
		arrayData.push({id:user1.id,firstName:user1.firstName, lastName:user1.lastName,email:user1.email, address:user1.address}); 
		$localStorage.regData=arrayData;
		
		$scope.val=$localStorage.regData;
		$scope.reset(user1);
		
	}	
	
	$scope.removeRow=function(index)	//29/10/17
	{									//29/10/17
		arrayData.splice(index,1)		//29/10/17
		
	}	
				$scope.editContact = function (contact) {
					$scope.user.id=contact.id;
					$scope.user.firstName=contact.firstName;
					$scope.user.lastName=contact.lastName;
					$scope.user.email=contact.email;
					$scope.user.address=contact.address;
					$scope.IsVisible1=true;
					$scope.IsVisible=false;
				};
	
				
				$scope.reset=function(user1)
				{
					user1.id="0";
					user1.firstName="";
					user1.lastName="";
					user1.email="";
					user1.address="";
				};
				
				$scope.Update=function(user1)
				{
				arrayData[(user1.id)-1]	={id:user1.id,firstName:user1.firstName,lastName:user1.lastName,email:user1.email,address:user1.address};
					$scope.IsVisible1=false;
					$scope.IsVisible=true;
					$scope.reset(user1);
				};
				
				
	
}]);

