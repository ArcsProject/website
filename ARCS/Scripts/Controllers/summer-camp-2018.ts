angular.module("arcsApp").component("summerCamp2018", {
    templateUrl: GetUrlWithVersion("../../Views/summer-camp-2018.html"),
    controller: SummerCamp
});

function SummerCamp2018($scope) {
    $scope.TrackOutboundRequests = TrackOutboundRequests;
};
