angular.module("arcsApp").component("missionStatement", {
    templateUrl: GetUrlWithVersion("../../Views/mission-statement.html"),
    bindings: {
        statement: "="
    }
});