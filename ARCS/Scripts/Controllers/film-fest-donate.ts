angular.module("arcsApp").controller("FilmFestDonate",
function FilmFestDonate($scope) {

    $scope.filmFestivalAmounts = [
        {
            dollars: "10",
            level: "Many Thanks",
            benefits: "Many thanks for supporting our film festival! Please encourage friends and family to donate, TOGETHER we are making a huge difference!"
        },
        {
            dollars: "25",
            level: "Special Thanks",
            benefits: "We will integrate a special thank you credit on our website. Please remember you always have the option to make a recurring monthly donation towards ARCS and support all our events and programs."
        },
        {
            dollars: "50",
            level: "Festival Friend",
            benefits: "Special thank you credit on our website and you will receive our festival poster. Please remember you always have the option to make a recurring monthly donation towards ARCS and support all our events and programs."
        },
        {
            dollars: "100",
            level: "Festival Supporter",
            benefits: "We are offering a pair of tickets, our festival poster and special thank you credit on our website. Please remember you always have the option to make a recurring monthly donation towards ARCS and support all our events and programs."
        },
        {
            dollars: "250",
            level: "Festival Benefactor",
            benefits: "We are offering a pair of day passes, our festival poster, credit at the screenings from SIFF Cinema Uptown, and special thank you credit on our website."
        },
        {
            dollars: "Custom amount",
            visible_value: "$500 and More",
            level: "Festival Ambassador",
            benefits: "We are offering a pair of festival passes, our festival poster, credit at the screenings from SIFF Cinema Uptown, and special thank you credit on our website. A surprise gift will wait for you at the festival venue and you will be invited to a private dinner event with the festival guests and organizers."
        },
        {
            dollars: "Custom amount",
            visible_value: "Custom amount",
            level: "",
            benefits: ""
        }
    ];

    $scope.selectedFilmFestivalAmount = $scope.filmFestivalAmounts[4];

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

    $scope.isItemExpanded = function (item) {
        return $scope.expanded || item == $scope.selectedFilmFestivalAmount;
    }
});