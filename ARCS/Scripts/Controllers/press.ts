angular.module("arcsApp").component("press", {
    templateUrl: GetUrlWithVersion("../../Views/press.html"),
    controller: ['$scope', '$sce', 'asyncContent', PressController]
});

function PressController($scope, $sce, asyncContent) {
    asyncContent.getContent("press", $sce, ['description']).then(function (content) {
        for (var item in content) {
            $scope[item] = content[item];
        }
        $scope.DataLoaded = true;
    });
};