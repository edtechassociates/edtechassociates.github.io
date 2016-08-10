(function () {
    "use strict";

    function Team($scope, $state, DataService) {
        console.log($state.current);
        $scope.teamMember = $state.current.data.teamMember;
        $scope.DataService = DataService;

    }

    Team.$inject = ["$scope", "$state", "DataService"];

    angular
        .module("EdTech.Team", ["ui.router"])
        .controller("Team", Team)
}());
