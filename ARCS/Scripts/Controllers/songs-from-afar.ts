angular.module("arcsApp").component("songsFromAfar", {
    templateUrl: GetUrlWithVersion("../../Views/songs-from-afar.html"),
    controller: ['$scope', '$sce', 'asyncContent', SongsFromAfarController]
});

function SongsFromAfarController($scope, $sce, asyncContent) {
    asyncContent.getContent("songs-from-afar", $sce, ['details']).then(function (content) {
        for (var item in content) {
            $scope[item] = content[item];
        }
        $scope.DataLoaded = true;
    });
};