angular.module("arcsApp").component("filmFestival2018", {
    templateUrl: GetUrlWithVersion("../../Views/film-festival-2018.html"),
    controller: ['$scope', '$sce', 'asyncContent', FilmFestival2018Controller]
}).directive('jsonld', ['$filter', '$sce', 'asyncContent', function($filter, $sce, asyncContent) {
  return {
    restrict: 'E',
    template: function() {
      return '<script type="application/ld+json" ng-bind-html="StructuredData"></script>';
    },
    scope: {
      json: '=json'
    },
      link: function ($scope, element, attrs) {
          asyncContent.getContent("structured_filmfest2018", $sce, null).then(function (content) {
              $scope.StructuredData = $sce.trustAsHtml($filter('json')(content));
        });
    },
    replace: true
  };
}]);

function FilmFestival2018Controller($scope, $sce, asyncContent) {
    $scope.GetUrlWithVersion = GetUrlWithVersion;
    $scope.TrackOutboundRequests = TrackOutboundRequests;

    asyncContent.getContent("filmfest2018", $sce, ['name','description', 'details', 'descriptionHtml']).then(function (content) {
        for (var item in content) {
            $scope[item] = content[item];
        }
    });

    $scope.donorGroupTitles = {
        donors500plus: "Supporting Sponsor ($501 - $999)",
        donors500: "Visitor of the Romanian \"Uncanny Worlds\" ($500)",
        donors250: "Festival Friend ($250)",
        donors100: "Festival Supporter ($100)",
        donors50: "ARCS Friend ($50)",
        donors25: "Special Thanks ($25)"
    };
};