angular.module("arcsApp").component("donate", {
    templateUrl: "../../Views/donate.html",
    controller: DonateController
});
function DonateController($scope) {
    $scope.selectedPurpose = "Romanian Film Festival";
    $scope.selectedAmount = "$25";
    $scope.purposes = [
        "Romanian Film Festival",
        "General Donation",
        "Club Piticot",
        "Second Generation Project",
        "Romanian Language Studies at UW"
    ];
    $scope.setSelectedPurpose = function (purpose) {
        $scope.selectedPurpose = purpose;
    };
    $scope.amounts = [
        "$500",
        "$250",
        "$100",
        "$50",
        "$25",
        "Custom amount"
    ];
    $scope.setSelectedAmount = function (amount) {
        $scope.selectedAmount = amount;
    };
    $scope.filmFestivalAmounts = [
        {
            dollars: "$500",
            level: "Level ARCS",
            benefits: "Get a pair of festival passes, the festival poster, credit at the screenings, and credit on the website. A surprise thank-you gift will wait for you at the festival venue."
        },
        {
            dollars: "$250",
            level: "Level A",
            benefits: "Get a pair of day passes, the festival poster, and credit on the website. A surprise thank-you gift will wait for you at the festival venue."
        },
        {
            dollars: "$100",
            level: "Level R",
            benefits: "Get a pair of tickets, the festival poster, and credit on the website."
        },
        {
            dollars: "$50",
            level: "Level C",
            benefits: "Get the festival poster and credit on the website."
        },
        {
            dollars: "$25",
            level: "Level S",
            benefits: "Get credit on the website."
        },
        {
            dollars: "Custom amount",
            level: "",
            benefits: ""
        },
        {
            dollars: "$1000",
            level: "Partner",
            benefits: "Become a Festival Partner and join our team! If you are a local business, this is a wonderful opportunity to enhance your visibility within our diverse multicultural community."
        }
    ];
    $scope.setSelectedFilmFestivalAmount = function (amount) {
        $scope.selectedFilmFestivalAmount = amount;
    };
    $scope.selectedFilmFestivalAmount = $scope.filmFestivalAmounts[3];
}
;
