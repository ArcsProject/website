angular.module("arcsApp").component("mission", {
    templateUrl: "../../Views/mission.html",
    controller: MissionController
});
function MissionController($scope) {
    $scope.statements = [
        {
            title: "Romanian Film Festival",
            description: [
                "Since 2014, ARCS has been organizing the Romanian Film Festival in Seattle, a successful community building project in collaboration with Seattle International Film Festival. Hosted at SIFF Cinema Uptown, the event has been gathering around 2500 viewers of diverse cultural background each year."
            ],
            imagePath: "Romanian Film Festival(photo by Daniel Man).jpg",
            credit: "Daniel Man"
        },
        {
            title: "Stage",
            description: [
                "ARCS has been collaborating with Benaroya Hall, Seattle Art Museum, Kirkland Performance Center and Nesholm Family Lecture Hall (McCaw Hall), to organize and promote classical, traditional, or jazz music concerts and performances promoting the work of Romanian composers, artists and musicians."
            ],
            imagePath: "Music.jpg (photo by Daniel Zilcsak).jpg",
            credit: "Daniel Zilcsak"
        },
        {
            title: "Education - Romanian in High School",
            description: [
                "The course was conceived to address the heritage students of Romanian in a context dominated by English. The teaching will combine traditional methods (comprehension of written texts and grammar) with more recent ones (integrative and project-based)."
            ],
            imagePath: "Romanian in High School 2.jpg"
        },
        {
            title: "Education - Club Piticot",
            description: [
                "This program supports children (between 3 and 13) and their families to develop communication skills in Romanian and preserve their heritage, while fostering cultural sensitivity and appreciation for all the rich cultures of the Pacific Northwest."
            ],
            imagePath: "Club-Piticot2.jpg"
        },
        {
            title: "Education - Book Readings",
            description: [
                "ARCS promotes contemporary Romanian, American or Romanian- American writers whose works, in English or in Romanian, nurture our linguistic and cultural heritage."
            ],
            imagePath: "Florin Lazarescu (Photo by Daniel Zilcsak).jpg",
            credit: "Daniel Zilcsak"
        },
        {
            title: "Community",
            description: [
                "ARCS reaches out to various professional groups within the Seattle area to promote its mission, values and share opportunities of connection."
            ],
            imagePath: "ARCS at work.jpg"
        }
    ];
}
;
//# sourceMappingURL=mission.js.map