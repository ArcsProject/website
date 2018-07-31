angular.module("arcsApp").component("filmFestival", {
    templateUrl: GetUrlWithVersion("../../Views/film-festival.html"),
    controller: FilmFestivalController
});

function FilmFestivalController($scope) {
    $scope.GetUrlWithVersion = GetUrlWithVersion;
};