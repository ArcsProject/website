angular.module("arcsApp").component("contact", {
    templateUrl: "../../Views/contact.html",
    controller: ContactController
});

function ContactController($scope) {
    $scope.submitInformation = function() {
        $scope.sent = true;
    }
};