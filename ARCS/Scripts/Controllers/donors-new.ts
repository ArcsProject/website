angular.module("arcsApp").component("donorsnew", {
    templateUrl: GetUrlWithVersion("../../Views/donors-new.html"),
    bindings: {
        titles: "<",
        campaign: "@",
        heading: "@",
    },
    controller: DonorsNewController
});


function DonorsNewController($scope, $element, $attrs) {
    var ctrl = this;
    ctrl.dataLoaded = false;
    ctrl.dataAvailable = false;
    ctrl.$onInit = $.get({
        url: "api/donate/donors?target=" + $attrs.campaign,
        success: function (result) {
            $scope.donorGroups = $.parseJSON(result);

            //attach heading to each group
            for (var title in ctrl.titles)
            {
                if ($scope.donorGroups[title] != null) {
                    $scope.donorGroups[title].heading = ctrl.titles[title];
                    ctrl.dataAvailable = true;
                }
            }
            
            ctrl.dataLoaded = true;
            $scope.$apply();
        }
    });
}
