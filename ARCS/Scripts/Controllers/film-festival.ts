﻿angular.module("arcsApp").component("filmFestival", {
    templateUrl: GetUrlWithVersion("../../Views/film-festival.html"),
    controller: FilmFestivalController
});

function FilmFestivalController($scope, $sce) {
    $scope.GetUrlWithVersion = GetUrlWithVersion;

    $scope.specialEvents = [
        {
            name: "Uncanny Figments",
            descriptionHtml: [$sce.trustAsHtml('For this celebratory 5th edition, we are thrilled to share the work of an outstanding guest and artist,<a href="http://daniel-ursache.com/" target="_blank">Daniel Ursache</a>. His exhibition, <b>"Uncanny Figments"</b>, will be hosted by <b>A/NT Gallery</b> throughout November.')],
            date: new Date(2018, 10, 3),
            startTime: new Date(2018, 10, 3, 20, 0),
            location: "A/NT Gallery",
            imagePath: "film_fest_2018/uncanny_figments.jpg",
            locationLink: "https://goo.gl/maps/631CakMwHTm"
        },
    ];
    /*
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
    */

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