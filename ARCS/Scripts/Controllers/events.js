angular.module("arcsApp").component("events", {
    templateUrl: "../../Views/events.html",
    controller: EventsController
});
function EventsController($scope) {
    $scope.filters = [
        "Film",
        "Stage",
        "Community",
        "Work"
    ];
    $scope.events = [
        {
            name: "Sample work event",
            description: ["Description"],
            date: new Date(2017, 8, 20),
            startTime: new Date(2017, 8, 20, 17, 30),
            endTime: new Date(2017, 8, 20, 19, 30),
            location: "Egyptian Theatre",
            locationLink: "https://www.google.com/maps/place/SIFF+Cinema+Egyptian",
            tags: ["work"],
            imagePath: ""
        },
        {
            name: "Sample community event",
            description: ["Description"],
            date: new Date(2017, 8, 25),
            location: "Egyptian Theatre",
            locationLink: "https://www.google.com/maps/place/SIFF+Cinema+Egyptian",
            tags: ["community"],
            imagePath: ""
        },
        {
            name: "Sample stage event",
            description: ["Description"],
            date: new Date(2017, 8, 27),
            location: "Egyptian Theatre",
            locationLink: "https://www.google.com/maps/place/SIFF+Cinema+Egyptian",
            tags: ["stage"]
        },
        {
            name: "Sample film event",
            description: ["Description"],
            date: new Date(2017, 8, 30),
            location: "Egyptian Theatre",
            locationLink: "https://www.google.com/maps/place/SIFF+Cinema+Egyptian",
            tags: ["film"]
        }
    ];
    $scope.setSelectedFilter = function (filter) {
        $scope.selectedFilter = filter;
    };
}
;
angular.module("arcsApp").filter("eventsFilter", function () {
    return function (events, selectedFilter) {
        if (!selectedFilter) {
            return events;
        }
        return events.filter(function (e) {
            return e.tags.indexOf(selectedFilter.toLowerCase()) !== -1;
        });
    };
});
//# sourceMappingURL=events.js.map