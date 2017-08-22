angular.module("arcsApp").component("events", {
    templateUrl: "../../Views/events.html",
    controller: EventsController
});

function EventsController($scope, $stateParams) {
    $scope.filters = [
        "All",
        "Film",
        "Stage",
        "Community",
        "Work"
    ];

    $scope.events = [
        {
            name: "Lucian Ban - Songs from Afar",
            description: ["Fusion concert where American jazz meets classical and Folk Romanian music"],
            date: new Date(2017, 10, 10),
            startTime: new Date(2017, 8, 20, 19, 30),
            location: "Seattle Art Museum",
            locationLink: "https://www.google.com/maps/place/Seattle+Art+Museum/",
            tags: ["stage"],
            imagePath: "lucian-ban.jpg"
        },
        {
            name: "Romanian Film Festival",
            description: ["The fourth edition of the Romanian Film Festival"],
            date: new Date(2017, 10, 17),
            location: "SIFF Cinema Uptown",
            locationLink: "https://www.google.com/maps/place/SIFF+Cinema+Uptown",
            tags: ["community", "film", "stage"],
            imagePath: "rffs_0_0.png"
        },
        {
            name: "Romanian Film Festival",
            description: ["The fourth edition of the Romanian Film Festival"],
            date: new Date(2017, 10, 18),
            location: "SIFF Cinema Uptown",
            locationLink: "https://www.google.com/maps/place/SIFF+Cinema+Uptown/",
            tags: ["community", "film", "stage"],
            imagePath: "rffs_0_0.png"
        },
        {
            name: "Romanian Film Festival",
            description: ["The fourth edition of the Romanian Film Festival"],
            date: new Date(2017, 10, 19),
            location: "SIFF Cinema Uptown",
            locationLink: "https://www.google.com/maps/place/SIFF+Cinema+Uptown",
            tags: ["community", "film", "stage"],
            imagePath: "rffs_0_0.png"
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