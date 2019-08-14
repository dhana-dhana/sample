var english = "";
var nonEng = "";
var myapp = angular.module('myApp', []);  
myapp.controller("myController",function($scope){
	$scope.call1 = function(){
	
	if($scope.checkbox.english){
		english =" English";
	}else{
		english = "";
	}
	if($scope.checkbox.non_english){
		nonEng =" Non English";
	}else{
		nonEng = "";
	}
	 alert("username = " + $scope.username +"\n"+
	 		  "Address = " + $scope.address +"\n"+
	 		  "Email = " + $scope.email +"\n"+
	 		  "Gender = " + $scope.sex +"\n"+
	 		  "password = " + $scope.passid +"\n"+
	 		  "selectedCountry = " + $scope.selectedCountry +"\n"+
	 		  "username = " + $scope.username +"\n"+
	 		  "Zip Code = " + $scope.zip +"\n"+
	 		  "About = " + $scope.desc+"\n"+
	 		  "languages "+ english +nonEng
	 		  );
	 };
	 $scope.names = ["India", "USA", "Russia"];
	 $scope.call = function(){
	 	$scope.username=""
	 };
});