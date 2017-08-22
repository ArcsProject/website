/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/angular-ui-router/index.d.ts" />
var app = angular.module("arcsApp", ["ui.router", "angular-appinsights"]);
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, insightsProvider) {
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
        url: "^/events/",
        template: "<events></events>",
        params: {
            filterBy: "All"
        }
    };
    states["film-festival"] = {
        name: "film-festival",
        url: "^/film-festival",
        template: "<film-festival></film-festival>"
    };
    states["mission"] = {
        name: "mission",
        url: "^/mission",
        template: "<mission></mission>"
    };
    states["partners"] = {
        name: "partners",
        url: "^/partners",
        template: "<partners></partners>"
    };
    states["press"] = {
        name: "press",
        url: "^/press",
        template: "<press></press>"
    };
    states["donate"] = {
        name: "donate",
        url: "^/donate",
        template: "<donate></press>"
    };
    states["contact"] = {
        name: "contact",
        url: "^/contact",
        template: "<contact></contact>"
    };
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);
    for (var stateName in states) {
        $stateProvider.state(stateName, states[stateName]);
    }
    insightsProvider.start("c7f965bc-f81a-4152-861a-3be30bda3623");
});
