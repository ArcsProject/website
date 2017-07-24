/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/angular-ui-router/index.d.ts" />
var app = angular.module("arcsApp", ["ui.router"]);
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    var states = [];
    states["main"] = {
        name: "main",
        url: "^/",
        templateUrl: "../Views/main.html"
    };
    states["staff"] = {
        name: "staff",
        url: "^/staff",
        template: "<staff></staff>"
    };
    states["sponsors"] = {
        name: "sponsors",
        url: "^/sponsors",
        template: "<sponsors></sponsors>"
    };
    states["events"] = {
        name: "events",
        url: "^/events",
        template: "<events></events>"
    };
    states["film-festival"] = {
        name: "film-festival",
        url: "^/film-festival",
        template: "<film-festival></film-festival>"
    };
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);
    for (var stateName in states) {
        $stateProvider.state(stateName, states[stateName]);
    }
});
//# sourceMappingURL=arcs.js.map