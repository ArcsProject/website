angular.module("arcsApp").component("mission", {
    templateUrl: GetUrlWithVersion("../../Views/mission.html"),
    controller: ['$scope', 'asyncContent', MissionController]
});

function MissionController($scope, asyncContent) {
    asyncContent.getContent("mission").then(function (content) {
        for (var item in content) {
            $scope[item] = content[item];
        }
        $scope.DataLoaded = true;
    });
};