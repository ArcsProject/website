angular.module("arcsApp").controller("FilmFestDonate",
function FilmFestDonate($scope) {

    $scope.filmFestivalAmounts = [
        {
            dollars: "25",
            level: "Special Thanks",
            benefits: "We will integrate a special thank you credit on our website. Please remember you always have the option to make a recurring monthly donation towards ARCS and support all our events and programs."
        },
        {
            dollars: "50",
            level: "ARCS Friend",
            benefits: "Special thank you credit on our website and you will receive our festival poster. Please remember you always have the option to make a recurring monthly donation towards ARCS and support all our events and programs."
        },
        {
            dollars: "100",
            level: "Festival Supporter",
            benefits: "We are offering a pair of tickets, our festival poster and special thank you credit on our website. Please remember you always have the option to make a recurring monthly donation towards ARCS and support all our events and programs."
        },
        {
            dollars: "250",
            level: "Festival Friend",
            benefits: "We are offering a pair of day passes, our festival poster, credit at the screenings from SIFF Cinema Uptown, and special thank you credit on our website."
        },
        {
            dollars: "500",
            level: "Visitor of the Romanian \"Uncanny Worlds\"",
            benefits: "Immerse yourself in an imaginary cinematic journey to Romania, and its \"Uncanny Worlds\". We are offering a pair of festival passes, our festival poster, credit at the screenings from SIFF Cinema Uptown, and special thank you credit on our website. A surprise gift will wait for you at the festival venue and you will be invited to a private dinner event with the festival guests and organizers."
        },
        {
            dollars: "Custom amount",
            visible_value: "$501 - $999",
            level: "Supporting Sponsor",
            benefits: "Become a festival SPONSOR! If you are a local business, this is a wonderful opportunity to enhance your visibility within our diverse cultural community. The sooner you decide to be an ARCS Partner, the better.... your brand will be visible for a longer period of time on all our promotional materials. A surprise thank you gift will wait for you at the festival venue and you will also be invited to a private dinner event with the festival guests and organizers."
        },
        {
            dollars: "Custom amount",
            visible_value: "$1000 - $2000",
            level: "ARCS Partner",
            benefits: "Become our ARCS PARTNER! Your logo will be posted on all our promotional materials and integrated into our PR campaign. The sooner you decide to be an ARCS Partner, the better.... your brand will be visible for a longer period of time.  A surprise gift will wait for you at the festival venue and you will be invited to a private dinner event with the festival guests and organizers. You will also get a pair of tickets to the Romanian film sponsored by ARCS @ Seattle International Film Festival in 2019."
        },
        {
            dollars: "Custom amount",
            visible_value: ">$2000",
            level: "Festival Official Partner",
            benefits: "Become a FESTIVAL OFFICIAL PARTNER! Your logo will be posted on all our promotional materials and integrated into our PR campaign, together with all our institutional partners. The sooner you decide to be Festival Official Partner, the better.... your brand will be visible for a longer period of time. A surprise gift will wait for you at the festival venue and you will be invited to a private dinner event with the festival guests and organizers. You will also get four tickets to the Romanian film sponsored by ARCS @ Seattle International Film Festival in 2019."
        },
        {
            dollars: "Custom amount",
            visible_value: "Custom amount",
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

    $scope.isItemExpanded = function (item) {
        return $scope.expanded || item == $scope.selectedFilmFestivalAmount;
    }
});