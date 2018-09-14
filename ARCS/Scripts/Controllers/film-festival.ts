angular.module("arcsApp").component("filmFestival", {
    templateUrl: GetUrlWithVersion("../../Views/film-festival.html"),
    controller: ['$scope', '$sce', 'asyncContent', FilmFestivalController]
});

function FilmFestivalController($scope, $sce, asyncContent) {
    $scope.GetUrlWithVersion = GetUrlWithVersion;

    asyncContent.getContent("filmfest2018", $sce, ['name','description', 'details', 'descriptionHtml']).then(function (content) {
        for (var item in content) {
            $scope[item] = content[item];
        }
    });

    $scope.donorGroupTitles = {
        donors500plus: "Supporting Sponsor ($501 - $999)",
        donors500: "Visitor of the Romanian \"Uncanny Worlds\" ($500)",
        donors250: "Festival Friend ($250)",
        donors100: "Festival Supporter ($100)",
        donors50: "ARCS Friend ($50)",
        donors25: "Special Thanks ($25)"
    };
};