﻿angular.module("arcsApp").component("filmFestival", {
    templateUrl: "../../Views/film-festival.html",
    controller: FilmFestivalController
});

function FilmFestivalController($scope) {
    $scope.events = [
        {
            name: "Pre-event: Songs from Afar",
            description: [
                `"Songs from Afar" a fusion concert with jazz musicians Lucian Ban & Elevation Quartet from New York, and their special guests Gavril Tărmure (voice) from Romania and Seattle–based Angela Drăghicescu (piano).`,
                "Don’t miss this one-of-a-kind concert where American jazz and improvisation will meet the rich Romanian folk repository and the classical legacy of composer George Enescu."
            ],
            date: new Date(2017, 10, 10),
            startTime: new Date(2017, 10, 10, 19, 30),
            endTime: new Date(2017, 10, 10, 21, 30),
            location: "Seattle Art Museum",
            locationLink: "https://www.google.com/maps/place/Seattle+Art+Museum/@47.607309,-122.373152,13z/data=!4m8!1m2!2m1!1sseattle+art+museum!3m4!1s0x54906ab22579184b:0x7b64e8eea04a8dc4!8m2!3d47.607309!4d-122.3381331",
            imagePath: ""
        },
        {
            name: "Sample community event",
            description: ["Description"],
            date: new Date(2017, 8, 25),
            location: "Egyptian Theatre",
            locationLink: "https://www.google.com/maps/place/SIFF+Cinema+Egyptian",
            tags: ["community"],
            imagePath: ""
        },
        {
            name: "Sample stage event",
            description: ["Description"],
            date: new Date(2017, 8, 27),
            location: "Egyptian Theatre",
            locationLink: "https://www.google.com/maps/place/SIFF+Cinema+Egyptian",
            tags: ["stage"]
        },
        {
            name: "Sample film event",
            description: ["Description"],
            date: new Date(2017, 8, 30),
            location: "Egyptian Theatre",
            locationLink: "https://www.google.com/maps/place/SIFF+Cinema+Egyptian",
            tags: ["film"]
        }
    ];

    $scope.donorsARCS = [
        "Roxana Arama",
        "Alina Popa"
    ];

    $scope.donorsA = [
        "Mary Sherhart",
        "Alexandra Dorca",
        "Dana Elena Cozmei",
        "Gabriel Ghizila",
        "Irina si Cristi Salvan"
    ];

    $scope.donorsR = [
        "Radu Palanca",
        "Stefan Saroiu",
        "Elena si Adrian Fanaru",
        "Ovidiu Constantin",
        "Carl Winter",
        "Elena Boris"
    ];

    $scope.donorsC = [
        "Lisa Friedli"
    ];

    $scope.donorsS = [
        "Maryna Ajaja"
    ];
};