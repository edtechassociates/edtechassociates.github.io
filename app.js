(function () {
    "use strict";

    function ConfigureDefaultPage ($urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
    }
    ConfigureDefaultPage.$inject = ["$urlRouterProvider"];

    function ConfigureHTML5Mode ($locationProvider) {
        $locationProvider.html5Mode(true);
    }
    ConfigureHTML5Mode.$inject = ["$locationProvider"];


    function ConfigureRouter ($stateProvider) {
        /*State Management*/
        $stateProvider
        /* Desktop States */
            .state("base", {
                url: "^/",
                views: {
                    "@": {
                        templateUrl: "/home/home.html",
                        controller: "Home"
                    }
                }
            })
    }
    ConfigureRouter.$inject = ["$stateProvider"];


    angular
        .module("EdTech", [
            /* Angular Modules */
            "ngSanitize",
            "ngAnimate",
            "ngResource",
            /* 3rd party Modules */
            "ui.router",
            "ui.bootstrap",
            /* Controllers */
            "EdTech.Home",
            /* Services */
            "EdTech.DataService",
            "EdTech.EmailService",
            /* Directives */
            "EdTech.headerNav",
            "EdTech.footerBar"
        ])
        .config(ConfigureDefaultPage)
        .config(ConfigureHTML5Mode)
        .config(ConfigureRouter)
}());
