angular.module("arcsApp").component("staff", {
    templateUrl: GetUrlWithVersion("../../Views/staff.html"),
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
        },
        {
            name: "Iulian Calinov",
            title: "Honorary Consul",
            email: "iulian.calinov@arcsproject.org",
            imagePath: "board/IulianCalinov.jpg",
            details: "Iulian Calinov was born in Bucharest Romania. Iulian holds a masters degree in Electrical Engineering from the Politehnica University of Bucharest and a Masters of Business Administration in Corporate Finance jointly from Bucharest School of Economics and Université du Québec à Montréal. Iulian has worked as an Assistant Professor with the Politechnica University of Bucharest for 6 years after graduation, teaching Control Theory, Digital Control, Microprocessor Systems, Electric Drives and Microeconomics. After a brief stint as a Treasurer for Philip Moris in Romania, Iulian moved to the United States to work for Microsoft in Redmond, WA in 1998. Currently, Iulian is a Program Manager with Facebook, and serves the Romanian community in Seattle as a Honorary Consul on Romania as well as the Secretary of Romanian American Society of Washington State."
        }
    ];

    $scope.advisoryBoard = [
        {
            name: "Grațiela Albișor",
            email: "gratiela.albisor@arcsproject.org",
            imagePath: "board/GratielaAlbisor.jpg",
            details: "Graţiela Albişor is a licensed clinical and counseling psychologist, specialized in gifted education. She graduated the Faculty of Psychology and Educational Sciences at the University of Bucharest in 2004. She earned an MA and a PhD in Psychology from the same university. In her pursuit of excellence and cross-cultural understanding she attended specialization courses by leading specialists working across Europe and the US. Since 2008 Grațiela has worked in private practice and held training workshops for psychologists and school teachers. In Romania, she initiated the PsyArt Center project – a center for creative development of children and adults alike. Exploring the multicultural environment of Luxembourg, where she lived before relocating to the US, Grațiela gained a better understanding of the importance of cultural-educational programs for youth in Romanian communities. Grațiela is focused on facilitating Romanian heritage as well as raising awareness about the harmonious integration of Romanian roots in the American socio-cultural context."
        },
        {
            name: "Ioana Danciu",
            email: "ioana.danciu@arcsproject.org",
            imagePath: "board/IoanaDanciu.jpg",
            details: "Ioana grew up in Constanta, Romania, spending her summer breaks on the streets of Old Town Bucharest and the movie sets of Romanian director Dan Pița. Despite her early dream of becoming a movie director, she went on to graduate from Romania’s prestigious Polytechnic University of Bucharest with a degree in Electrical Engineering. After moving to the United States and completing a Master’s Degree in Computer Science, she embarked on a successful 20-year career with Adobe Systems and was granted multiple patents for innovative work in image processing and color science. In 2016, Ioana retired from Adobe to dedicate more time to photography, digital image editing, and her long-held interest in volunteering. Aside from extensive visual communication experience, Ioana will bring to ARCS a quirky creative side and well-honed project management and people skills."
        },
        {
            name: "Adriana Guiman",
            email: "adriana.guiman@arcsproject.org",
            imagePath: "board/AdrianaGuiman.jpg",
            details: "Adriana Guiman was born in Piatra Neamț, a small town in North of Romania. She moved to Seattle in 2017, after she graduated a master program in Transmedia storytelling and Crossmedia Production in Estonia. She is currently researching cinematic virtual experiences, being enrolled in a PhD program in Helsinki, Finland.  She was involved in numerous corporate media projects as a producer and on multiple personal projects as a film director and media artist."
        },
        {
            name: "Raluca Hera",
            email: "raluca.hera@arcsproject.org",
            imagePath: "board/RalucaHera.jpg",
            details: "Born and raised in Bucharest, Romania, Raluca moved to the United States in 1996. She fell in love with beautiful Pacific Northwest, but continued to keep close ties with her birth country and it’s culture. A graduate of the Polytechnic Institute of Bucharest, Computer Science, she has spent all of her adult life around computers, but has always cultivated other interests like art, fashion and travel. Raluca is at the beginning of her ARCS journey, but brings enthusiasm and a will to get things done supporting various projects such as the Romanian Film Festival in Seattle."
        },
        /*{
            name: "Adreea Isac",
            email: "andreea.isac@arcsproject.org",
            imagePath: "board/AndreeaIsac.jpg",
            details: ""
        },*/
        {
            name: "Marina Lyons",
            email: "marina.lyons@arcsproject.org",
            imagePath: "board/MarinaLyons.jpg",
            details: "Marina moved from the small village of Bucsani, Romania to Orange County, California, when she was eight years old.  While she spoke no English at first, she quickly assimilated into the American culture, but she spent her summers with her grandparents in Romania.  She now practices business litigation at the law firm Carson & Noel PLLC in Issaquah, Washington.  Since moving to Washington, she has been searching for ways to get more involved in the Romanian community, and she was fortunate to discover the opportunities offered by ARCS.  Given her legal background, she hopes to assist ARCS with its business growth and development.  But perhaps more importantly, she looks forward to meeting more Romanian Americans, learning from each other’s experiences, and celebrating our culture."
        },
        {
            name: "Ioana Pop",
            email: "ioana.pop@arcsproject.org",
            imagePath: "board/IoanaPop.jpg",
            details: "Ioana is passionate about sharing the richness of Romanian folklore, both with the Romanian community and with the larger multi-cultural local community. She comes from a computer science background (MS in Computer Science at University of Washington, BS in Computer Science at Polytechnica University of Bucharest) and is currently working as a software engineer for Microsoft. A community coordinator for Northwest Folklife festival, she is also the co-founder of Datina Folk Ensemble, a Seattle-based non-profit that promotes traditional Romanian dance and music."
        },
        {
            name: "Daniel Pravăț",
            email: "daniel.pravat@arcsproject.org",
            imagePath: "board/DanielPravat.jpg",
            details: 'Daniel Pravăț is a software engineer manager with Microsoft with more than 20 years of experience driving and managing complex projects. He is the co-author of the highly popular book "Advanced Windows Debugging", covering Windows Operating System Internals and powerful debugging tips and tricks. As the father of two teenager sons, Daniel has taken the time to volunteer in his children’s schools, as well as tutoring in after-school activities with the local library. He and his wife live in Redmond and are deeply invested in the Romanian community in the Seattle area.'
        },
        {
            name: "Mary Sherhart",
            email: "mary.sherhart@arcsproject.org",
            imagePath: "board/MarySherhart.jpg",
            details: "Mary Sherhart is a Seattle-based musician who specializes in traditional singing from the Balkans. She is a performer, teacher, choir director, producer, board member and student."
        },
        {
            name: "Radu Simionescu",
            email: "radu.simionescu@arcsproject.org",
            imagePath: "board/RaduSimionescu.jpg",
            details: "Radu is Principal Software Engineer at Microsoft. He is passionate about history and politics. ARCS’s legacy to the next generation makes him a fervent supporter. Also, he brings to our group his IT expertise by organizing and managing our technical needs."
        }
    ];
};