(function () {
    "use strict";

    function DataService() {
        var data = {};
        data.
        data.employees = [];

        return data;
    }

    DataService.$inject = [];

    angular
        .module("EdTech.DataService", [])
        .service("DataService", DataService);
}());