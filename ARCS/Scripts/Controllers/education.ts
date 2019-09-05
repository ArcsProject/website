angular.module("arcsApp").component("education", {
    templateUrl: GetUrlWithVersion("../../Views/education.html"),
    controller: EducationController
});

function EducationController($scope) {
    $scope.TrackOutboundRequests = TrackOutboundRequests;
    var innerPopup = $("#excellence-center-popup");
    if (innerPopup != null) {
        innerPopup.parent().hide();
    }
    $scope.instructors = [
        {
            name: "Otilia Baraboi",
            email: "otilia.baraboi@arcsproject.org",
            imagePath: "OtiliaBaraboi.jpg",
            details: "Otilia Baraboi is a higher education professional who immigrated to Seattle from Romania in 2000. She got her Ph.D. in French at the University of Washington, where she currently teaches French language and literature. Before coming to the US, Otilia worked as a literary journalist, published short-fiction and translations, and was actively involved in the cultural life of her hometown, Iasi. For Otilia, becoming part of the pioneer project “Româna la Liceu” represents a long-awaited opportunity to invest in the future of the Romanian American community and, on a more personal level, to have a positive impact in the ways in which her own two boys define and pass on their rich cultural and linguistic heritage."
        },
        {
            name: "Ileana Marin",
            email: "ileana.marin@arcsproject.org",
            imagePath: "IleanaMarin.jpg",
            details: "Ileana Marin graduated Faculty of Letters at the Uniiversity of Bucharest in 1991. She began her academic career at the Ovidius University of Constanța where she taught comparative literature, coordinated International Summer Courses of Romanian Language, Culture, and Civilization for which she also taught Romanian between 1992 and 2004. In 2000, she earned her Ph.D. in philology from the University of Bucharest and later became an associate professor. From 2006, she has taught comparative literature courses at the University of Washington where she defended her second Ph.D. in textual studies in 2011. Since 2010, she has collaborated with the Center of Excellence in Image Studies – University of Bucharest. She authored 5 books, 3 in Romanian, as well as several articles. Ileana Marin has put effort into making Romanian contemporary culture more visible serving in the board of ARCS and working toward reintroducing Romanian at the University of Washington. At the UW she also taught Romanian as a Fulbright scholar in 2004 and as an instructor for FLAS fellows in 2007."
        }
    ];

    $scope.substitutes = [
        {
            name: "Mariana Oltean",
            email: "mariana_oltean@hotmail.com",
            imagePath: "MarianaOltean.jpg",
            details: "Mariana Oltean has a life-long passion about teaching. Shortly after completing her degree in Romanian and French language and literature at the University of Bucharest, she started teaching at Sf. Pantelimon High School in Bucharest, helping her students to participate in the regional competitions on Romanian literature. After a few years, she moved in the Pacific Northwest where she has taught French at the French American School of Washington since 2002. In parallel, for the last nine years, Mariana continued to volunteer as a Romanian teacher and she coordinated the Romanian program at the Summer school of the \"Three Holy Hierarchs\" Romanian Orthodox Church. Mariana Oltean holds a OSPI Professional Teaching Certificate for teaching Romanian and French language and literature (grades K1-12)."
        },
        {
            name: "Nadia Schmieder",
            email: "nadia@thomaslmacy.com",
            imagePath: "NadiaSchmieder.jpg",
            details: "Nadia Schmieder was born in Petrosani, Hunedoara. After graduating English and Romanian from the Faculty of Letters at the University of Bucharest, she earned an MA in Applied Linguistics from the same university. She worked as translator for the American Bar Association and participated in the modernization of high education in Romania after 1989 working with the British Counncil in Bucharest. In 1989, she moved to Washington State where she changed gears and took over an IT program at Bellevue Community College. For 12 years she served as a Business Analyst for King County in Seattle, preparing software textbooks and training staff. Currently she is a real estate agent who enjoys teaching basic Romanian to her clients."
        },
        {
            name: "Madalina Tonciu",
            email: "",
            imagePath: "",
            details: "Mădălina Tonciu was born in Bucharest, România. She studied at the University of Bucharest where she received a Bachelor’s Degree in Romanian and French language and literature. After having taught for 16 years Romanian and French in a Middle School and High School in Bucharest, she obtained the highest rank in teaching. Mădălina relocated to Seattle where she worked in French Immersion School in Bellevue. With a Master’s degree in Special education from the San Diego University, with many years of classroom experience in Europe and in the US, and with great dedication to provide students with excellent education, she is confident that her ability will contribute substantially to the “Romanian in High School” program."
        }
    ];
}