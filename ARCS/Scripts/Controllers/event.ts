angular.module("arcsApp").component("event", {
    templateUrl: GetUrlWithVersion("../../Views/event.html"),
    bindings: {
        event: "="
    }
});