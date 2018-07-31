/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/angular-ui-router/index.d.ts" />

let IsDev = (<any>window).IsDev

let GetUrlWithVersion = function (url) {
    return url + "?v=" + (<any>window).vtkn;
}

let app = angular.module("arcsApp", ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    let states = [];

    states["main"] = {
        name: "main",
        url: "^/",
        templateUrl: GetUrlWithVersion("../Views/main.html")
    };

    states["staff"] = {
        name: "staff",
        url: "^/staff",
        template: "<staff></staff>"
    };

    states["alumni"] = {
        name: "alumni",
        url: "^/alumni",
        template: "<alumni></alumni>"
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

    states["past-events"] = {
        name: "past-events",
        url: "^/past-events",
        template: "<past-events></past-events>"
    };

    states["film-festival"] = {
        name: "film-festival",
        url: "^/film-festival",
        template: "<film-festival></film-festival>"
    };

    states["film-festival-2017"] = {
        name: "film-festival-2017",
        url: "^/film-festival-2017",
        template: "<film-festival-2017></film-festival-2017>"
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

    states["consulate_en"] = {
        name: "consulate_en",
        url: "^/consulate_en",
        template: "<consulate_en></consulate_en>"
    };

    states["consulate_ro"] = {
        name: "consulate_ro",
        url: "^/consulate_ro",
        template: "<consulate_ro></consulate_ro>"
    };

    states["press"] = {
        name: "press",
        url: "^/press",
        template: "<press></press>"
    };

    states["piticot"] = {
        name: "piticot",
        url: "^/piticot",
        template: "<piticot></piticot>"
    };

    states["high-school"] = {
        name: "high-school",
        url: "^/high-school",
        template: "<high-school></high-school>"
    };

    states["high-school-ongoing"] = {
        name: "high-school-ongoing",
        url: "^/high-school-ongoing",
        template: "<high-school-ongoing></high-school-ongoing>"
    };

    states["excellence-center"] = {
        name: "excellence-center",
        url: "^/excellence-center",
        template: "<excellence-center></excellence-center>"
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

    states["songs-from-afar"] = {
        name: "songs-from-afar",
        url: "^/songs-from-afar",
        template: "<songs-from-afar></songs-from-afar>"
    };

    states["heritage-mission"] = {
        name: "heritage-mission",
        url: "^/heritage-mission",
        template: "<heritage-mission></heritage-mission>"
    };

    states["heritage-competition-rules"] = {
        name: "heritage-competition-rules",
        url: "^/heritage-competition-rules",
        template: "<heritage-competition-rules></heritage-competition-rules>"
    };

    states["heritage-application"] = {
        name: "heritage-application",
        url: "^/heritage-application",
        template: "<heritage-application></heritage-application>"
    };

    states["heritage-contest-2018"] = {
        name: "heritage-contest-2018",
        url: "^/heritage-contest-2018",
        template: "<heritage-contest-2018></heritage-contest-2018>"
    };

    states["heritage-awards-2017"] = {
        name: "heritage-awards-2017",
        url: "^/heritage-awards-2017",
        template: "<heritage-awards-2017></heritage-awards-2017>"
    };

    states["summer-camp"] = {
        name: "summer-camp",
        url: "^/summer-camp",
        template: "<summer-camp></summer-camp>"
    };

    states["cultural-festival-maryhill"] = {
        name: "cultural-festival-maryhill",
        url: "^/cultural-festival-maryhill",
        template: "<cultural-festival-maryhill></cultural-festival-maryhill>"
    };


    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);

    for (var stateName in states) {
        $stateProvider.state(stateName, states[stateName]);
    }

    if (!IsDev) {
        app.factory('myGoogleAnalytics', [
            '$rootScope', '$window', '$location',
            function ($rootScope, $window, $location) {
                var myGoogleAnalytics = {};
                var sendPageview = function () {
                    if ($window.ga) {
                        $window.ga('set', 'page', $location.path());
                        $window.ga('send', 'pageview');
                    }
                }
                $rootScope.$on('$viewContentLoaded', sendPageview);
                return myGoogleAnalytics;
            }
            ])
            .run([
                'myGoogleAnalytics',
                function (myGoogleAnalytics) {
                }
            ]);
    }
});

app.run(['$rootScope', '$window',
    function ($rootScope, $window) {
        $rootScope.GetUrlWithVersion = $window.GetUrlWithVersion;
}]);