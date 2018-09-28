angular.module("arcsApp").component("heritageApplication", {
    templateUrl: GetUrlWithVersion("../../Views/heritage-application.html"),
    controller: HeritageApplication
});

function HeritageApplication($scope) {
    $scope.TrackOutboundRequests = TrackOutboundRequests;
};