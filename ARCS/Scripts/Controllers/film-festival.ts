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
        {
            name: "Untamed Romania",
            description: [$sce.trustAsHtml("\"Untamed Romania\" explores \"one of the wildest and most beautiful parts of Europe\", from the mysterious Danube Delta to the unknown Carpathian forests. Wolves, bears, and lynx roam the vast forests where almost all the original flora and fauna still exist left untouched since time immemorial. There is no other location of comparable size with such pristine nature in Europe. This unique documentary is narrated by award-winning Romanian film and stage actor Victor Rebengiuc.")],
            artist: "Tom Barton-Humphreys",
            length: "90 minutes",
            genres: "Documentary",
            imagePath: "romania_neimblanzita1.jpg",
            year: "2018"
        },
    ];
};