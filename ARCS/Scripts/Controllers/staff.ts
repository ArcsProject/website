angular.module("arcsApp").component("staff", {
    templateUrl: "../../Views/staff.html",
    controller: StaffController
});

function StaffController($scope) {
    $scope.boardMembers = [
        {
            name: "Otilia Baraboi",
            title: "President",
            email: "otilia.baraboi@arcsproject.org",
            imagePath: "OtiliaBaraboi.jpg",
            details: "Otilia Baraboi is a writer, translator and higher education professional who immigrated to Seattle from Romania in 2000. She got her Ph.D. in French at the University of Washington, where she currently teaches French language and literature. Before coming to the US, Otilia worked as a literary journalist, published short-fiction and translations, and was actively involved in the cultural life of her hometown, Iasi. For Otilia, ARCS is a long-awaited opportunity to remain connected with the vibrant culture of her birthplace, while advocating the ethnic diversity and artistic vitality of the Northwest. Most of all, she joined ARCS in order to have a direct, positive impact on the ways in which future generations of American Romanians will define, celebrate and pass on their legacy."
        },
        {
            name: "Ileana Marin",
            title: "Treasurer",
            email: "ileana.marin@arcsproject.org",
            imagePath: "IleanaMarin.jpg",
            details: "Prior to her coming to the United States in 2005, Ileana Marin held the faculty position of Associate Professor at Ovidius University of Constanta (equivalent to an American liberal arts college), where she taught a variety of courses in literature and published three books and several articles. In 2004, as a Fulbright scholar, she discovered the Textual Studies Program at the University of Washington, a field that she always wanted to pursue, but which does not exist as such in Romania. She earned her second Ph.D. in Textual Studies and Comparative Literature from the University of Washington in 2011. Recently she has taught interdisciplinary courses for the Honors Program at the University of Washington. She initiated the fund for Romanian Studies, hoping that Romanian language will be taught regularly at the UW. It is her belief that her training in Textual Studies has given her an important understanding of the historicity and materiality of texts from all the arts, a perspective she wants to integrate into her scholarship and teaching and which she hopes to bring to ARCS."
        },
        {
            name: "Jim Augerot",
            title: "Community Outreach",
            email: "jim.augerot@arcsproject.org",
            imagePath: "JimAugerot.jpg",
            details: "Jim Augerot is an Emeritus Professor in the Department of Slavic Languages and Literatures at the University of Washington. Although his main work has been with the Slavic Languages, he has been involved in Romanian affairs since his first two-year stay in Cluj-Napoca in 1964-66. He is the author of a Romanian textbook for college students and a joint work (with Dumitru Chitoran and Hortensia Parlog) on the comparison of Romanian and English pronunciation. He has been active in the promotion of the study of Eastern Europe both in the Slavic Department and as Chair/Director of the Russian, East European and Central Asian Studies (2009-2012). He looks forward to greater inclusion of Romanian studies at the University and increased involvement of the community in all facets of modern Romania."
        },
        {
            name: "Dana Cozmei",
            title: "Community Outreach",
            email: "dana.cozmei@arcsproject.org",
            imagePath: "DanaCozmei.jpg",
            details: "Dana Cozmei is a Principal Program Manager at Microsoft with many years of experience in complex project management, software development and testing. In her free time, Dana enjoys painting and piloting planes. A native of Romania, Dana will bring to ARCS her firsthand knowledge of the contemporary art scene and living cultures of her birthplace, in addition to offering guidance with project management and coordination."
        },
        {
            name: "Alexandrina Maicaneanu",
            title: "Secretary",
            email: "alexandrina.maicaneanu@arcsproject.org",
            imagePath: "AlexandrinaMaicaneanu.jpg",
            details: "Born and raised in Romania, Alexandrina has a degree from the prestigious HEC in Montreal, and a career in business. She moved to the Northwest from Montreal in 2003, where she taught French at the French American School and worked as a financial adviser at the International School Community. Her free time is dedicated to friends, family, traveling, and cultivating a good life. Art has played an important role in her formative years in Romania (she graduated the Arts High School in Cluj) and throughout her experience living in Montreal, a city with one of the most vibrant artists’ diaspora of Romanian descent in North America. Alexandrina brings to ARCS her action-oriented approach to life in general, and her valuable background in project development, business and community outreach."
        },
        {
            name: "Elizabeta Iliescu",
            title: "Children's Program Coordinator",
            email: "elizabeta.iliescu@arcsproject.org",
            imagePath: "IMG_20170904_182543.jpg",
            details: "Elizabeta was born in Northern Romania where she grew up very attached to her grandparents. After high school, she moved to Bucharest where she studied physics and worked for an insurance company. She moved to the US with her family in 2008, and spent a few years just playing with her kids. The love of being around children made her look for opportunities to work with them. She worked and volunteered in different early childhood education programs. She is currently working with Bellevue School District in its Early Learning Programs. She obtained an AAS-T in Early Childhood Careers and is enrolled for a BA in Mathematics."
        }
    ];

    $scope.advisoryBoard = [];
};