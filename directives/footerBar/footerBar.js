(function () {
    "use strict";

    function footerBar() {
        return {
            restrict: "E",
            templateUrl: "/directives/footerBar/footerBar.html"
        };
    }
    footerBar.$inject = [];

    angular
        .module("EdTech.footerBar", [])
        .directive("footerBar", footerBar);
}());