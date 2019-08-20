angular.module("arcsApp").component("filmFestival2019", {
    templateUrl: GetUrlWithVersion("../../Views/film-festival-2019.html"),
    controller: ['$scope', '$sce', 'asyncContent', FilmFestival2019Controller]
}).directive('jsonld2', ['$filter', '$sce', 'asyncContent', function ($filter, $sce, asyncContent) {
    return {
        restrict: 'E',
        template: function () {
            return '<script type="application/ld+json" ng-bind-html="StructuredData"></script>';
        },
        scope: {
            json: '=json'
        },
        link: function ($scope, element, attrs) {
            asyncContent.getContent("structured_filmfest2019", $sce, null).then(function (content) {
                $scope.StructuredData = $sce.trustAsHtml($filter('json')(content));
            });
        },
        replace: true
    };
}]);

function FilmFestival2019Controller($scope, $sce, asyncContent) {
    $scope.GetUrlWithVersion = GetUrlWithVersion;
    $scope.TrackOutboundRequests = TrackOutboundRequests;

    asyncContent.getContent("filmfest2019", $sce, ['name', 'description', 'details', 'descriptionHtml']).then(function (content) {
        for (var item in content) {
            $scope[item] = content[item];
        }
    });

    $scope.donorGroupTitles = {
        donors500plus: "Festival Amabassador ($500 and more)",
        donors250: "Festival Benefactor ($250)",
        donors100: "Festival Supporter ($100)",
        donors50: "Festival Friend ($50)",
        donors25: "Special Thanks ($25)",
        donors10: "Many Thanks ($10)"
    };
};