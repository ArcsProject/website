angular.module("arcsApp").component("staff", {
    templateUrl: GetUrlWithVersion("../../Views/staff.html"),
    controller: ['$scope', 'asyncContent', StaffController]
});

function StaffController($scope, asyncContent) {
    asyncContent.getContent("board").then(function (content) {
        for (var item in content) {
            $scope[item] = content[item];
        }
        $scope.DataLoaded = true;
    });
};