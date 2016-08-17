(function () {
    "use strict";

    function ConfigureDefaultPage ($urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
    }
    ConfigureDefaultPage.$inject = ["$urlRouterProvider"];

    function ConfigureRouter ($stateProvider) {
        /*State Management*/
        $stateProvider
            .state("base", {
                abstract: true
            })
            .state("base.home", {
                url: "^/",
                views: {
                    "@": {
                        templateUrl: "/home/home.html",
                        controller: "Home"
                    }
                }
            })
            .state("base.product", {
                url: "^/product",
                views: {
                    "@": {
                        templateUrl: "/product/product.html",
                        controller: "Product"
                    }
                }
            })
            .state("base.product.cy", {
                url: "^/product/courtyard",
                views: {
                    "@": {
                        templateUrl: "/product/courtyard.html",
                        controller: "Product"
                    }
                }
            })
            .state("base.product.rc", {
                url: "^/product/resource-center",
                views: {
                    "@": {
                        templateUrl: "/product/resourceCenter.html",
                        controller: "Product"
                    }
                }
            })
            .state("base.product.ah", {
                url: "^/product/academic-hall",
                views: {
                    "@": {
                        templateUrl: "/product/academicHall.html",
                        controller: "Product"
                    }
                }
            })
            .state("base.tech", {
                url: "^/technology",
                views: {
                    "@": {
                        templateUrl: "/tech/tech.html",
                        controller: "Tech"
                    }
                }
            })
            .state("base.research", {
                url: "^/research",
                views: {
                    "@": {
                        templateUrl: "/research/research.html",
                        controller: "Research"
                    }
                }
            })
            .state("base.team", {
                url: "^/team",
                views: {
                    "@": {
                        templateUrl: "/team/team.html",
                        controller: "Team"
                    }
                },
                data: {
                    teamMember: "none"
                }
            })
            .state("base.team.david", {
                url: "^/team/david",
                views: {
                    "@": {
                        templateUrl: "/team/teamMember.html",
                        controller: "Team"
                    }
                },
                data: {
                    teamMember: "david"
                }
            })
            .state("base.team.ken", {
                url: "^/team/ken",
                views: {
                    "@": {
                        templateUrl: "/team/teamMember.html",
                        controller: "Team"
                    }
                },
                data: {
                    teamMember: "ken"
                }
            })
            .state("base.team.kevin", {
                url: "^/team/kevin",
                views: {
                    "@": {
                        templateUrl: "/team/teamMember.html",
                        controller: "Team"
                    }
                },
                data: {
                    teamMember: "kevin"
                }
            })
            .state("base.team.connie", {
                url: "^/team/connie",
                views: {
                    "@": {
                        templateUrl: "/team/teamMember.html",
                        controller: "Team"
                    }
                },
                data: {
                    teamMember: "connie"
                }
            })
            .state("base.team.luiz", {
                url: "^/team/luiz",
                views: {
                    "@": {
                        templateUrl: "/team/teamMember.html",
                        controller: "Team"
                    }
                },
                data: {
                    teamMember: "luiz"
                }
            })
            .state("base.team.mel", {
                url: "^/team/mel",
                views: {
                    "@": {
                        templateUrl: "/team/teamMember.html",
                        controller: "Team"
                    }
                },
                data: {
                    teamMember: "mel"
                }
            })
            .state("base.team.mark", {
                url: "^/team/mark",
                views: {
                    "@": {
                        templateUrl: "/team/teamMember.html",
                        controller: "Team"
                    }
                },
                data: {
                    teamMember: "mark"
                }
            })
            .state("base.team.brett", {
                url: "^/team/brett",
                views: {
                    "@": {
                        templateUrl: "/team/teamMember.html",
                        controller: "Team"
                    }
                },
                data: {
                    teamMember: "brett"
                }
            })
            .state("base.team.anton", {
                url: "^/team/anton",
                views: {
                    "@": {
                        templateUrl: "/team/teamMember.html",
                        controller: "Team"
                    }
                },
                data: {
                    teamMember: "anton"
                }
            })
            .state("base.team.megan", {
                url: "^/team/megan",
                views: {
                    "@": {
                        templateUrl: "/team/teamMember.html",
                        controller: "Team"
                    }
                },
                data: {
                    teamMember: "megan"
                }
            })
            .state("base.team.anna", {
                url: "^/team/anna",
                views: {
                    "@": {
                        templateUrl: "/team/teamMember.html",
                        controller: "Team"
                    }
                },
                data: {
                    teamMember: "anna"
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
            "EdTech.Team",
            "EdTech.Product",
            /* Services */
            "EdTech.DataService",
            "EdTech.EmailService",
            /* Directives */
            "EdTech.headerNav",
            "EdTech.footerBar"
        ])
        .config(ConfigureDefaultPage)
        .config(ConfigureRouter)
}());
