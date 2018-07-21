angular.module("arcsApp").component("events", {
    templateUrl: "../../Views/events.html",
    controller: EventsController
});

function EventsController($scope, $stateParams) {
    $scope.filters = [
        "All",
        "Film",
        "Education",
        "Heritage",
        "Stage",
    ];

    $scope.events = [
        {
            name: "Documentary screening and celebration",
            description: ['You are warmly invited to the final screening of the documentary "Romanian in Seattle", filmed during ARCS Summer Camp (July 23-Aug 4) @ the University of Washington, with director Iulia Rugină and actress Ioana Flora.'],
            startTime: new Date(2018, 7, 5, 14, 0),
            endTime: new Date(2017, 7, 5, 16, 0),
            location: "Three Holy Hierarchs Church Romanian Center",
            locationLink: "https://goo.gl/maps/Kf2MLWAxeGF2",
            tags: ["education", "heritage", "film"],
            imagePath: "summer_camp.png",
            moreInfoPath: "summer-camp"
        },
        {
            name: 'Evaluation Day "Româna la Liceu"',
            description: ["The exact location will be anounced at a later date."],
            startTime: new Date(2018, 8, 15, 9, 30),
            endTime: new Date(2017, 8, 15, 12, 30),
            location: "University of Washington",
            locationLink: "https://goo.gl/maps/3WK3shnnM7B2",
            tags: ["education", "heritage"],
            imagePath: "highschool1.jpg",
            moreInfoPath: "high-school"
        },
        {
            name: "Romanian Cultural Festival",
            description: ["Romanian Cultural Festival"],
            startDate: new Date(2018, 8, 22),
            endDate: new Date(2018, 8, 22),
            location: "Maryhill Museum of Art Goldendale, WA",
            locationLink: "https://www.google.com/maps/place/Maryhill+Museum+of+Art/@45.6774618,-120.8669593,17z/data=!3m1!4b1!4m5!3m4!1s0x549627fc553924c9:0xb881dc90af6e15a5!8m2!3d45.6774581!4d-120.8647706",
            tags: ["heritage"],
            imagePath: "maryhill_event.png",
            moreInfoPath: "cultural-festival-maryhill"
        },
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