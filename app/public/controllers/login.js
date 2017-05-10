app.controller('loginController',function($scope,$location,$http,$rootScope){
  console.log("login controller");
   $("#myProgress,#myBar").hide();
    var info;

  $scope.submit = function(){
    console.log("inside submit function");

             info={
                firstName:$scope.firstName,
                lastName:$scope.lastName
            };
            console.log(info);
          $http({
            method:'POST',
            url:'http://localhost:3000/koda/login',
            data:info,
            headers:{'content-Type' : 'application/json'}
        }).then(function(success){
            console.log("login successful");
            window.localStorage['name'] = info.firstName;
    $rootScope.Data = window.localStorage['name'];
            $location.path('/welcomeUser');

        }),function(error){
        console.log("err");
        };
        };


});
