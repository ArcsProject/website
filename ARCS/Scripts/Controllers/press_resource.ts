angular.module("arcsApp").component("pressresource", {
    templateUrl: GetUrlWithVersion("../../Views/press_resource.html"),
    bindings: {
        resource: "="
    }
});