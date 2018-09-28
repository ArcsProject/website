angular.module("arcsApp").component("heritageMission", {
    templateUrl: GetUrlWithVersion("../../Views/heritage-mission.html"),
    controller: HeritageMission
});

function HeritageMission($scope) {
    $scope.TrackOutboundRequests = TrackOutboundRequests;
};