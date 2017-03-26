var app = angular.module('Sample');

app.controller('tagmodalController', ['$scope', '$element', 'title', 'close','fileUpload','$timeout','localStorageService','$http', function($scope, $element, title, close, fileUpload, $timeout,localStorageService,$http) {

    // $scope.upload_choices = ['Tree', 'Mountain', 'Animal', 'Other'];
    // $scope.upload_custom_tag = null;
    // $scope.upload_tag = null;
    // $scope.upload_location = null;
    $scope.title = title;

    // $scope.close = function() {
    //     close({}, 500);

    // };

    // $scope.upload_done = function() {

    //     var file = $scope.myFile;
    //     console.log('file is ' );
    //     console.dir(file);
    //     // fileUpload.uploadFileToUrl(file, Yahan url dena hai);  

    // };

}]);
