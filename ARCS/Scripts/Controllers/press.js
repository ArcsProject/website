angular.module("arcsApp").component("press", {
    templateUrl: "../../Views/press.html",
    controller: PressController
});
function PressController($scope) {
    $scope.pressImages = [
        {
            title: "Romanian Film Festival - Scarred Hearts",
            src: "ScarredHearts2.jpg"
        },
        {
            title: "Romanian Film Festival - Back Home",
            src: "(c) Acasa la Tata, regia Andrei Cohn. Mandragora (4).jpg"
        },
        {
            title: "Romanian Film Festival - Breaking News",
            src: "BREAKING_NEWS-stills-003.jpg"
        },
        {
            title: "Romanian Film Festival - This Baba",
            src: "ThisBabaNoText.jpg"
        },
        {
            title: "Romanian Film Festival - The New Gypsy Kings",
            src: "CALIU & TARAF DE HAIDOUKS.jpg"
        },
        {
            title: "Romanian Film Festival - Sieranevada",
            src: "Sieranevada still 2.jpg"
        },
        {
            title: "Romanian Film Festival - The Rest is Silence",
            src: "Restul e tacere 5.jpg"
        },
        {
            title: "Romanian Film Festival - 2 Lottery Tickets",
            src: "doua lozuri 1.jpg"
        }
    ];
    $scope.setSelectedImg = function (img) {
        $scope.selectedImg = img;
    };
}
;
//# sourceMappingURL=press.js.map