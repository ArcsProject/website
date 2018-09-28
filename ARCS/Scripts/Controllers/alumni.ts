angular.module("arcsApp").component("alumni", {
    templateUrl: GetUrlWithVersion("../../Views/alumni.html"),
    controller: ['$scope', 'asyncContent', AlumniController]
});

function AlumniController($scope, asyncContent) {
    asyncContent.getContent("alumni").then(function (content) {
        for (var item in content) {
            $scope[item] = content[item];
        }
        $scope.DataLoaded = true;
    });
    $scope.TrackOutboundRequests = TrackOutboundRequests;
};