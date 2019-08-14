var check = "";
var myapp = angular.module('myApp', []);  
myapp.controller("myController",function($scope){
	$scope.call1 = function(){
	
	if($scope.checkbox.english){
		check = check + "English";
	}
	if($scope.checkbox.non_english){
		check = check + "Non English";
	}
	 alert(check + "\n"+"username = " + $scope.username +"\n"+
	 		  "Address = " + $scope.address +"\n"+
	 		  "Email = " + $scope.email +"\n"+
	 		  "Gender = " + $scope.sex +"\n"+
	 		  "password = " + $scope.passid +"\n"+
	 		  "selectedCountry = " + $scope.selectedCountry +"\n"+
	 		  "username = " + $scope.username +"\n"+
	 		  "Zip Code = " + $scope.zip +"\n"+
	 		  "About = " + $scope.desc+"\n"
	 		  );
	 };
	 $scope.names = ["India", "USA", "Russia"];
	 $scope.call = function(){
	 	$scope.username=""
	 };
});