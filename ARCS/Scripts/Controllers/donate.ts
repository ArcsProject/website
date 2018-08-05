angular.module("arcsApp").component("donate", {
    templateUrl: GetUrlWithVersion("../../Views/donate.html"),
    controller: DonateController
});

function DonateController($scope) {
    $scope.GetUrlWithVersion = GetUrlWithVersion;
    $scope.selectedPurpose = "Romanian Film Festival";
    $scope.selectedAmount = "$25";

    $scope.purposes = [
        "Romanian Film Festival",
        "General Donation",
        "Club Piticot",
        "Romanian in High School",
        "The Center of Excellence Romanian in Action"
    ];

    $scope.setSelectedPurpose = function ($event, purpose) {
        $event.preventDefault();
        $scope.selectedPurpose = purpose;
    }

    $scope.amounts = [
        "1000",
        "500",
        "250",
        "100",
        "50",
        "25",
        "Custom amount"
    ];

    $scope.selectedAmount = $scope.amounts[3];

    $scope.setSelectedAmount = function ($event, amount) {
        $event.preventDefault();
        $scope.selectedAmount = amount;

        if (amount === "Custom amount") {
            $scope.recurring = false;
        }
    }

    $scope.showRecurringCheckbox = function () {
        return $scope.selectedAmount != "Custom amount";
    }

    $scope.getSelectedAmount = function() {
        if ($scope.selectedAmount == "Custom amount") {
            return 0;
        }
        else {
            return $scope.selectedAmount;
        }
    }
};