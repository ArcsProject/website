angular.module("arcsApp").component("donors", {
    templateUrl: GetUrlWithVersion("../../Views/donors.html"),
    bindings: {
        titles: "<",
        campaign: "@",
        heading: "@",
    },
    controller: DonorsController
});


function DonorsController($scope, $element, $attrs) {
    var ctrl = this;
    ctrl.dataLoaded = false;
    ctrl.$onInit = $.get({
        url: "api/donate/donors?target=" + $attrs.campaign,
        success: function (result) {
            $scope.donorGroups = $.parseJSON(result);

            //attach heading to each group
            for (var title in ctrl.titles)
            {
                if ($scope.donorGroups[title] != null) {
                    $scope.donorGroups[title].heading = ctrl.titles[title];
                }
            }
            
            ctrl.dataLoaded = true;
            $scope.$apply();
        }
    });
}
