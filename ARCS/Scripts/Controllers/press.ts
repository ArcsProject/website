angular.module("arcsApp").component("press", {
    templateUrl: "../../Views/press.html",
    controller: PressController
});

function PressController($scope) {
    $scope.pressImages = [
        {
            title: "Romanian Film Festival - Breaking News",
            src: "BREAKING_NEWS-stills-001.jpg"
        },
        {
            title: "Romanian Film Festival - Breaking News",
            src: "BREAKING_NEWS-stills-002.jpg"
        },
        {
            title: "Romanian Film Festival - Breaking News",
            src: "BREAKING_NEWS-stills-003.jpg"
        },
        {
            title: "Romanian Film Festival - Breaking News",
            src: "BREAKING_NEWS-stills-004.jpg"
        },
        {
            title: "Romanian Film Festival - Breaking News",
            src: "BREAKING_NEWS-stills-005.jpg"
        },
        {
            title: "Romanian Film Festival - Back Home",
            src: "(c) Acasa la Tata, regia Andrei Cohn. Mandragora (1).jpg"
        },
        {
            title: "Romanian Film Festival - Back Home",
            src: "(c) Acasa la Tata, regia Andrei Cohn. Mandragora (2).jpg"
        },
        {
            title: "Romanian Film Festival - Back Home",
            src: "(c) Acasa la Tata, regia Andrei Cohn. Mandragora (3).jpg"
        },
        {
            title: "Romanian Film Festival - Back Home",
            src: "(c) Acasa la Tata, regia Andrei Cohn. Mandragora (4).jpg"
        },
        {
            title: "Romanian Film Festival - Back Home",
            src: "(c) Acasa la Tata, regia Andrei Cohn. Mandragora (6).jpg"
        },
        {
            title: "Songs From Afar - Lucian Ban",
            src: "Lucian_BAN_press_3.jpg",
            credit: "Minodora Tibrea"
        }
    ];

    $scope.setSelectedImg = function (img) {
        $scope.selectedImg = img;
    };
};