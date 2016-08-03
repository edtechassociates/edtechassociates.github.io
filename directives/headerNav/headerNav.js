(function () {
    "use strict";

    function headerNav() {
        return {
            restrict: "E",
            templateUrl: "/directives/headerNav/headerNav.html"
        };
    }
    headerNav.$inject = [];

    angular
        .module("EdTech.headerNav", [])
        .directive("headerNav", headerNav);
}());