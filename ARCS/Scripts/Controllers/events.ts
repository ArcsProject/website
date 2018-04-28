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
            name: "Special Exhibit: Romanian Identity, Royalty and Architecture",
            description: [
                "Free",
                "Opening Night Reception: Thursday, October 5, 5:30 PM",
                `The exhibit "Romanian Identity, Royalty and Architecture" offers a chronological survey of Romanian architecture from 1870s to 1948 with a focus on the Royalties' contribution to the modernization of the country and creation of a national style. The edifices built during the reign of Carol I present both a young country's desire to become visible internationally and the dynasty founder's ambition to update Romanian architecture to European traditions. It was at the beginning of the 20th century that the capital Bucharest was called "The Little Paris", due to the French influence. After WWI, King Ferdinand and Queen Mary sponsored the implementation of the national style in their effort to put Romania on the map of the world. The exhibit identifies Queen Mary's contribution to Romanian architecture landmarks, including her beloved Balchik Palace. The modern style developed during Carol II and continued by his son Michael round up the exhibit that is authored by three major architecture professors: Augustin Ioan, Marius Marcu Lapadat, and Ionel Stoicescu, in collaboration with CREART, Bucharest. American Romanian Cultural Society is putting on this exhibit in collaboration with the UW Ellison Center for Russian, Eastern European and Central Asian Studies.`
            ],
            startDate: new Date(2017, 8, 27),
            endDate: new Date(2017, 10, 27),
            location: "UW Seattle Campus - 2nd and 3rd Floor Odegaard Library",
            locationLink: "https://www.google.com/maps/place/Odegaard+Undergraduate+Library+(OUG)/@47.656462,-122.31254,17z/data=!3m1!4b1!4m5!3m4!1s0x549014f329bffff7:0x6efe7422cf2f2f93!8m2!3d47.656462!4d-122.310346",
            tags: ["community"],
            imagePath: "Poster R Royalty Seattle 2.png"
        },
        {
            name: "Club Piticot Storytime",
            description: [
                "Free",
                "Kids ages 3-13",
                "Elizabeta Iliescu hosts storytime at the Bellevue Library for children ages 3-13. Club Piticot supports children and their families in developing communication skills in Romanian while also preserving cultural heritage. October features Halloween-themed games and stories including George Topârceanu’s \"Ballad of a Tiny Cricket\" and Adina Rosetti’s \"Why do Witches Fly on a Broom and 10 Other Fantastic Questions.\" Event in Romanian."
            ],
            date: new Date(2017, 9, 14),
            startTime: new Date(2017, 9, 14, 15, 0),
            endTime: new Date(2017, 9, 14, 17, 0),
            location: "Bellevue Library",
            locationLink: "https://www.google.com/maps/place/Bellevue+Library/@47.6201601,-122.196526,17z/data=!3m1!4b1!4m5!3m4!1s0x54906c8c6badfd01:0xba3faf4f02e64232!8m2!3d47.6201601!4d-122.1943373?q=Bellevue+Library+Bellevue,+WA+98004&biw=1069&bih=570&um=1&ie=UTF-8&sa=X&ved=0ahUKEwjB4O-HjZ_WAhVI72MKHTKjD2gQ_AUICigB",
            tags: ["community"],
            imagePath: "Club-Piticot2.jpg",
            moreInfoPath: "piticot"
        },
        {
            name: "Lucian Ban & Elevation: Songs From Afar",
            description: ["Celebrating the music of Romania this concert event is an amalgamation of Transylvanian folk with jazz and improvisation. Featuring Lucian Ban’s ELEVATION Quartet; master saxophonist  Abraham Burton; Transylvanian singer Gavril Tărmure; and the Angela Drăghicescu Ensemble paying tribute to famed  composer George Enescu with a new arrangement of the Romanian Rhapsody."],
            date: new Date(2017, 10, 10),
            startTime: new Date(2017, 8, 20, 19, 30),
            location: "Seattle Art Museum",
            locationLink: "https://www.google.com/maps/place/Seattle+Art+Museum/",
            tags: ["stage"],
            imagePath: "lucian-ban.jpg",
            moreInfoPath: "songs-from-afar"
        },
        {
            name: "Book Signing and Romanian Film Event - Cristi Puiu by Monica Filimon",
            description: [
                "New York-based film critic and professor Monica Filimon will sign copies of her new book Cristi Puiu (University of Illinois Press 2017) and deliver a talk about the beginnings of New Romanian cinema with a specific focus on the black comedy The Death of Mr. Lazarescu.  In Cristi Puiu, Filimon explores the works of an artist dedicated to truth not as an abstract concept, but as the ephemeral revelation of the fuller ungraspable world beyond the screen.",
                "Event in English"
            ],
            date: new Date(2017, 10, 16),
            startTime: new Date(2017, 10, 16, 18, 30),
            location: "UW Seattle Campus, The Ellison Center - Thomson Hall Room 317",
            locationLink: "https://www.google.com/maps/place/The+Henry+M.+Jackson+School+of+International+Studies/@47.6559675,-122.3068937,17z/data=!4m8!1m2!2m1!1sThe+Ellison+Center!3m4!1s0x0:0xd952a116a281984!8m2!3d47.6566!4d-122.3058899",
            tags: ["community"],
            imagePath: "9780252082276.jpg",
            links: [
                {
                    text: "Amazon",
                    href: "https://www.amazon.com/Cristi-Puiu-Contemporary-Film-Directors/dp/0252082273/ref=sr_1_1?ie=UTF8&qid=1504916629&sr=8-1&keywords=Monica+Filimon"
                },
                {
                    text: "U of I Press",
                    href: "http://www.press.uillinois.edu/books/catalog/65srs4wx9780252040764.html"
                }
            ]
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
        },
        {
            name: "Ciprian Popescu - Meet the Author",
            description: [
                "Free",
                "In Romanian",
                "Ciprian Popescu, Romanian-language author based in Montreal, will read from his awarded debut Mile End (2016, Max Blecher Publishing House Romania). The book is a construction of 77 days about the new life as immigrant in Canada and the memory of the motherland.",
                "A previous text, published in Revolutia din departare/ The Revolution from Afar (2011, Curtea Veche, ed.C.Hermeziu), will also be discussed with former colleague in Romania and neighbor in Montreal, ARCS member Alexandra Dorca.The author will sign books following the talk."
            ],
            date: new Date(2017, 11, 9),
            startTime: new Date(2017, 11, 8, 16, 0),
            endTime: new Date(2017, 11, 8, 17, 30),
            location: "Bellevue Library",
            locationLink: "https://www.google.com/maps/place/Bellevue+Library/@47.6201601,-122.196526,17z/data=!3m1!4b1!4m5!3m4!1s0x54906c8c6badfd01:0xba3faf4f02e64232!8m2!3d47.6201601!4d-122.1943373?q=Bellevue+Library+Bellevue,+WA+98004&biw=1069&bih=570&um=1&ie=UTF-8&sa=X&ved=0ahUKEwjB4O-HjZ_WAhVI72MKHTKjD2gQ_AUICigB",
            tags: ["community"],
            imagePath: "c_mile_end_mare.jpg"
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