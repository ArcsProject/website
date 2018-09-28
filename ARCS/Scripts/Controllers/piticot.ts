angular.module("arcsApp").component("piticot", {
    templateUrl: GetUrlWithVersion("../../Views/piticot.html"),
    controller: PiticotController
});

function PiticotController($scope) {
    $scope.TrackOutboundRequests = TrackOutboundRequests;
}