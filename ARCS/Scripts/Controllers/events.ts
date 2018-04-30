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
            name: "Romanian Films at SIFF 2018, sponsored by ARCS",
            description: ["Stay tuned for more details!"],
            startDate: new Date(2018, 4, 3),
            endDate: new Date(2018, 5, 10),
            location: "SIFF Cinema Uptown",
            locationLink: "https://www.google.com/maps/place/SIFF+Cinema+Uptown",
            tags: ["community", "film", "stage"],
            imagePath: "siff_content/siff2018.png"
        },
        {
            name: "Club Piticot",
            description: [
                "Free",
                "Kids ages 3-13",
                "Let's get together to celebrate together International Children's Day! Event in Romanian."
            ],
            date: new Date(2018, 5, 2),
            startTime: new Date(2018, 5, 2, 15, 0),
            endTime: new Date(2017, 5, 2, 17, 0),
            tags: ["community"],
            location: "Redmond Library",
            locationLink: "https://www.google.com/maps/place/Redmond+Regional+Library/@47.6789086,-122.1302662,17z/data=!3m1!4b1!4m5!3m4!1s0x54900d4d5c384747:0x8d071c2fe5aa28c6!8m2!3d47.6789086!4d-122.1280775",
            imagePath: "Club-Piticot2.jpg",
            moreInfoPath: "piticot"
        },
        {
            name: "Inauguration of the Romanian Center of Excellence ROACT (Romanian In Action)",
            description: ["Location to be determined"],
            startDate: new Date(2018, 9),
            endDate: new Date(2018, 9),
            tags: ["community"],
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
            tags: ["community", "film", "stage"],
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