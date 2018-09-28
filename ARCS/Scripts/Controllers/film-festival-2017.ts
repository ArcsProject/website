angular.module("arcsApp").component("filmFestival2017", {
    templateUrl: GetUrlWithVersion("../../Views/film-festival-2017.html"),
    controller: ['$scope', '$sce','asyncContent', FilmFestival2017Controller]
});

function FilmFestival2017Controller($scope, $sce, asyncContent) {
    $scope.TrackOutboundRequests = TrackOutboundRequests;
    asyncContent.getContent("filmfest2017", $sce, ['description', 'details']).then(function (content) {
        for (var item in content) {
            $scope[item] = content[item];
        }
    });
    $scope.donorGroupTitles = {
        donors500: "Level ARCS ($500+)",
        donors250: "Level A ($250+)",
        donors100: "Level R ($100+)",
        donors50: "Level C ($50+)",
        donors25: "Level S ($25+)"
    };
};