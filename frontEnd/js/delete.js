var app = angular.module('Sample');
var img_path = "";

app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

app.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).then(function(response){
            if(response){
                img_path = response.data.result.files.file[0].path;
            }
        }, function(response){
            // console.log("Load ho gya :/");

        });
    };
}]);

app.controller('deletemodalController', ['$scope', '$element', 'title', 'close','fileUpload','$timeout','localStorageService','$http', function($scope, $element, title, close, fileUpload, $timeout,localStorageService,$http) {

    $scope.upload_choices = ['Tree', 'Mountain', 'Animal', 'Other'];
    $scope.upload_custom_tag = null;
    $scope.upload_tag = null;
    $scope.upload_location = null;

    $scope.close = function() {
        close({}, 500);

    };

    $scope.upload_done = function() {

        var file = $scope.myFile;
        console.log('file is ' );
        console.dir(file);
        // fileUpload.uploadFileToUrl(file, request_id1);

        // setTimeout(function() {
        //     console.log(img_path);
        //     console.log("YOLO");
        //     if($scope.ad_sellbuy == "Want to Buy"){
        //         console.log("Hello");
        //         var dataObj = {
        //             name : name,  
        //             itemname : $scope.ad_item_name,
        //             contact : $scope.ad_contact_number, 
        //   buy_sell : "buy",
        //   description : $scope.ad_description,
        //   image : img_path
          
        // };
        // }
        // if($scope.ad_sellbuy == "Want to Sell"){
        // console.log("HII")
        // var dataObj = {
        // name : name,
        // itemname : $scope.ad_item_name,
        // contact : $scope.ad_contact_number, 
        // buy_sell : "sell",
        // description : $scope.ad_description,
        // reason : $scope.ad_reason_selling,
        // price : $scope.ad_price_item,
        // image : img_path
        // };
        // }

        // console.log(dataObj);
        // $http.post(request_id, JSON.stringify(dataObj)).then(function(response){

        // if(response.data){
        // console.log('Buy Sell Add krne ka Backend Kaam kr rha hai :D');      
        // }    
        // },function(response){
        // console.log('failure - Buy Sell Modal Backend');
        // console.log(response);
        // });
        // }, 500);   

    };

}]);
