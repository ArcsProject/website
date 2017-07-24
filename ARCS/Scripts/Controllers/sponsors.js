angular.module("arcsApp").component("sponsors", {
    templateUrl: "../../Views/sponsors.html",
    controller: SponsorsController
});
function SponsorsController($scope) {
    $scope.sponsors = [
        {
            link: "http://www.icrny.org/",
            imagePath: "rciny_logo_Kb.png"
        },
        {
            link: "http://www.4culture.org/",
            imagePath: "4culture.png"
        },
        {
            link: "http://www.siff.net/",
            imagePath: "siff.png"
        },
        {
            link: "http://www.washington.edu/",
            imagePath: "uw.png"
        },
        {
            link: "http://ro-wa.org/",
            imagePath: "RO-WAneedle.png"
        }
    ];
}
;
//# sourceMappingURL=sponsors.js.map