(function() {
    angular.module('mainModule', []).controller('CtrlName', ['$scope', '$http', '$q', function($scope, $http, $q) {
        $scope.details = {};
        var init = function() {
            console.log("Here");
            getData()
        }
        var getData = function() {
            console.log("2 ::::")
            return $q(function(resolve, reject) {
                $http({
                    method: 'GET',
                    url: 'https://jsonplaceholder.typicode.com/users'
                }).success(function(response){
                    $scope.details = response
                    console.log("Response from the API ::: ", response);
                    resolve(response)
                }).error(function(data){
                    console.log(data);
                    reject("Failed to get data")
                });
            })
        }
        init();
    }])
})()