angular.module("arcsApp").component("events", {
    templateUrl: GetUrlWithVersion("../../Views/events.html"),
    controller: EventsController
});

function EventsController($scope, $stateParams) {
    $scope.TrackOutboundRequests = TrackOutboundRequests;
    $scope.filters = [
        "All",
        "Film",
        "Education",
        "Heritage",
        "Stage",
    ];

    $scope.events = [
        {
            name: "Inauguration of the Romanian Center of Excellence ROACT (Romanian In Action)",
            description: ["Location to be determined"],
            startDate: new Date(2018, 9),
            endDate: new Date(2018, 9),
            tags: ["heritage", "education"],
            imagePath: "excellence_center.jpg",
            moreInfoPath: "excellence-center"
        },
        {
            name: "Romanian Film Festival",
            description: ["The fifth edition of the Romanian Film Festival"],
            startDate: new Date(2018, 10, 2),
            endDate: new Date(2018, 10, 4),
            location: "SIFF Cinema Uptown",
            locationLink: "https://www.google.com/maps/place/SIFF+Cinema+Uptown",
            tags: ["heritage", "film", "stage"],
            imagePath: "rffs_0_0.png",
            moreInfoPath: "film-festival"
        }
    ];

    $scope.setSelectedFilter = function (filter) {
        $scope.selectedFilter = filter;
    }

    $scope.setSelectedFilter($stateParams["filterBy"] ? $stateParams["filterBy"] : "All");
};

angular.module("arcsApp").filter("eventsFilter", function () {
    return function (events, selectedFilter) {
        if (!selectedFilter || selectedFilter === "All") {
            return events;
        }

        return events.filter((e) => {
            return e.tags.indexOf(selectedFilter.toLowerCase()) !== -1;
        });
    }
});