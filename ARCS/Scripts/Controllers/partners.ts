angular.module("arcsApp").component("partners", {
    templateUrl: GetUrlWithVersion("../../Views/partners.html"),
    controller: ['$scope', 'asyncContent', PartnersController]
});

function PartnersController($scope, asyncContent) {
    $scope.TrackOutboundRequests = TrackOutboundRequests;
    asyncContent.getContent("partners").then(function (content) {
        for (var item in content) {
            $scope[item] = content[item];
        }
        $scope.DataLoaded = true;
    });
};