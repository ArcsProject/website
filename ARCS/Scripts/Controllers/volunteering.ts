angular.module("arcsApp").component("volunteering", {
    templateUrl: GetUrlWithVersion("../../Views/volunteering.html"),
    controller: ['$scope', '$stateParams', '$sce', VolunteeringController]
});

function VolunteeringController($scope, $stateParams, $sce) {
    $scope.param1 = $stateParams['contactId'];
    if ($scope.param1) {
        $scope.iframe = $sce.trustAsResourceUrl('https://arcsproject.secure.force.com/GW_Volunteers__PersonalSiteContactInfo?contactId=' + encodeURIComponent($stateParams['contactId']));
    }
    else {
        $scope.iframe = $sce.trustAsResourceUrl('https://arcsproject.secure.force.com/GW_Volunteers__PersonalSiteJobListing');
    }
}
