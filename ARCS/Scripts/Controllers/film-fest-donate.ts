angular.module("arcsApp").controller("FilmFestDonate",
function FilmFestDonate($scope) {

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

    $scope.selectedFilmFestivalAmount = $scope.filmFestivalAmounts[3];

    $scope.getSelectedFilmFestivalAmount = function () {
        if ($scope.selectedFilmFestivalAmount.dollars == "Custom amount") {
            return 0;
        }
        else {
            return $scope.selectedFilmFestivalAmount.dollars;
        }
    }


    $scope.setSelectedFilmFestivalAmount = function ($event, amount) {
        $event.preventDefault();
        $scope.selectedFilmFestivalAmount = amount;

        if (amount.dollars === "Custom amount") {
            $scope.recurring = false;
        }
    }

    $scope.showFilmFestRecurringCheckbox = function () {
        return $scope.selectedFilmFestivalAmount.dollars != "Custom amount";
    }
});