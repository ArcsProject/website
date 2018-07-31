angular.module("arcsApp").component("film", {
    templateUrl: GetUrlWithVersion("../../Views/film.html"),
    bindings: {
        film: "="
    }
});