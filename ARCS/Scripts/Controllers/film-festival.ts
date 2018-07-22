angular.module("arcsApp").component("filmFestival", {
    templateUrl: "../../Views/film-festival.html",
    controller: FilmFestivalController
});

function FilmFestivalController($scope) {
    $scope.selectedPurpose = "Romanian Film Festival";
    $scope.selectedAmount = "$25";

    $scope.purposes = [
        "Romanian Film Festival"
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

    $scope.filmFestivalAmounts = [
        {
            dollars: "1000",
            level: "Partner",
            benefits: "Become a Festival Partner and join our team! If you are a local business, this is a wonderful opportunity to enhance your visibility within our diverse multicultural community."
        },
        {
            dollars: "500",
            level: "Level ARCS",
            benefits: "Get a pair of festival passes, the festival poster, credit at the screenings, and credit on the website. A surprise thank-you gift will wait for you at the festival venue."
        },
        {
            dollars: "250",
            level: "Level A",
            benefits: "Get a pair of day passes, the festival poster, and credit on the website. A surprise thank-you gift will wait for you at the festival venue."
        },
        {
            dollars: "100",
            level: "Level R",
            benefits: "Get a pair of tickets, the festival poster, and credit on the website."
        },
        {
            dollars: "50",
            level: "Level C",
            benefits: "Get the festival poster and credit on the website."
        },
        {
            dollars: "25",
            level: "Level S",
            benefits: "Get credit on the website."
        },
        {
            dollars: "Custom amount",
            level: "",
            benefits: ""
        }
    ];

    $scope.setSelectedFilmFestivalAmount = function ($event, amount) {
        $event.preventDefault();
        $scope.selectedFilmFestivalAmount = amount;

        if (amount.dollars === "Custom amount") {
            $scope.recurring = false;
        }
    }

    $scope.selectedFilmFestivalAmount = $scope.filmFestivalAmounts[3];

    $scope.showRecurringCheckbox = function () {
        if ($scope.selectedPurpose == "Romanian Film Festival") {
            return $scope.selectedFilmFestivalAmount.dollars != "Custom amount";
        }
        else {
            return $scope.selectedAmount != "Custom amount";
        }
    }

    $scope.getSelectedAmount = function () {
        let returnedValue;
        if ($scope.selectedPurpose == "Romanian Film Festival") {
            if ($scope.selectedFilmFestivalAmount.dollars == "Custom amount") {
                return 0;
            }
            else {
                return $scope.selectedFilmFestivalAmount.dollars;
            }
        }
        else {
            if ($scope.selectedAmount == "Custom amount") {
                return 0;
            }
            else {
                return $scope.selectedAmount;
            }
        }
    }

    $scope.initFilmFest2018DonationProgress = function () {
        (<any>window).GetDonationProgress("film2018", function (result) {
            $scope.donationProgressMax = result.Max;
            $scope.donationProgressCurrent = result.Current;
            $scope.$apply();
        })
    }
};