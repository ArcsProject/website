angular.module("arcsApp").component("filmFestival", {
    templateUrl: GetUrlWithVersion("../../Views/film-festival.html"),
    controller: FilmFestivalController
});

function FilmFestivalController($scope, $sce) {
    $scope.GetUrlWithVersion = GetUrlWithVersion;

    $scope.events = [
    ];

    $scope.donorsARCS = donors["donorsARCS"];
    $scope.donorsA = donors["donorsA"];
    $scope.donorsR = donors["donorsR"];
    $scope.donorsC = donors["donorsC"];
    $scope.donorsS = donors["donorsS"];
    $scope.partners = donors["partners"];
    $scope.sponsors = donors["sponsors"];

    $scope.guests = [
    ];

    $scope.films = [
    ];
};