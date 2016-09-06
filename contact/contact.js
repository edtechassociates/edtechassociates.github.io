(function () {
    "use strict";

    function Contact($scope, EmailService) {
        $scope.EmailService = EmailService;
    }

    Contact.$inject = ["$scope", "EmailService"];

    angular
        .module("EdTech.Contact", ["EdTech.EmailService"])
        .controller("Contact", Contact)
}());
