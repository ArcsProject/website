angular.module("arcsApp").component("pastEvents", {
    templateUrl: "../../Views/past-events.html",
    controller: PastEventsController
});

function PastEventsController($scope, $stateParams) {
    $scope.filters = [
        "All",
        "Film",
        "Stage",
        "Community",
        "Work"
    ];

    $scope.years = [
        "All",
        "2015",
        "2016"
    ];

    $scope.events = [
        {
            name: "Romanian Film Festival (3rd Edition)",
            startDate: new Date(2016, 10, 18),
            endDate: new Date(2016, 10, 20),
            tags: ["community", "film", "stage", "2016"],
            imagePath: "rffs_0_0.png",
            links: [
                {
                    text: "Full Site",
                    href: "http://filmfest2016.arcsproject.org"
                }
            ]
        },
        {
            name: "Romanian Film Festival (2nd Edition)",
            startDate: new Date(2015, 10, 20),
            endDate: new Date(2015, 10, 22),
            tags: ["community", "film", "stage", "2015"],
            imagePath: "rffs_0_0.png",
            links: [
                {
                    text: "Full Site",
                    href: "http://filmfest2015.arcsproject.org"
                }
            ]
        },
    ];

    $scope.setSelectedFilter = function (filter) {
        $scope.selectedFilter = filter;
    }

    $scope.setSelectedYear = function (year) {
        $scope.selectedYear = year;
    }
};

angular.module("arcsApp").filter("pastEventsFilter", function () {
    return function (events, selectedFilter, selectedYear) {
        let typeFiltered = [];
        if (!selectedFilter || selectedFilter === "All") {
            typeFiltered = events;
        }
        else {
            typeFiltered = events.filter((e) => {
                return e.tags.indexOf(selectedFilter.toLowerCase()) !== -1;
            });
        }

        if (!selectedYear || selectedYear === "All") {
            return typeFiltered;
        }
        else {
            return typeFiltered.filter((e) => {
                return e.tags.indexOf(selectedYear) !== -1;
            });
        }
    }
});