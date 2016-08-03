(function () {
    "use strict";

    function Home($scope, EmailService) {
        $scope.EmailService = EmailService;
    }

    Home.$inject = ["$scope", "EmailService"];

    angular
        .module("EdTech.Home", [
            "EdTech.EmailService"
        ])
        .controller("Home", Home);
}());
