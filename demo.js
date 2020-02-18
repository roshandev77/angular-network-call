(function () {
    angular.module('mainModule', []).controller('CtrlName', ['$scope', '$http', '$q', function ($scope, $http, $q) {
        getData = () => {
            return ($q(function (resolve, reject) {
                $http({
                    method: 'GET',
                    url: 'https://jsonplaceholder.typicode.com/users'
                }).success(function (res) {
                    resolve(res)
                    cleanThePlayload(res)
                    console.log("Response :", res)
                }).error(function (data) {
                    reject("Failed to get the data")
                })
            }))
        }

        cleanThePlayload = (details) => {
            var employeeArr = []
            // var phoneArr = []

            for (var i = 0; i < details.length; i++) {
                var name = details[i].name
                var phone = details[i].phone
                // nameArr.push(name)
                // phoneArr.push(phone)
                employeeArr.push({
                    'Name' : name,
                    'Phone': phone
                })
            }
            $scope.details = employeeArr
            console.log("DATA of employee::::", $scope.details)
        }

        init = () => {
            var response = getData()
            console.log("Response Data : ", response)
        }

        init()
    }])
})()