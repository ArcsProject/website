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
            title: "Community Outreach",
            email: "alexandrina.maicaneanu@arcsproject.org",
            imagePath: "AlexandrinaMaicaneanu.jpg",
            details: "Born and raised in Romania, Alexandrina has a degree from the prestigious HEC in Montreal, and a career in business. She moved to the Northwest from Montreal in 2003, where she taught French at the French American School and worked as a financial adviser at the International School Community. Her free time is dedicated to friends, family, traveling, and cultivating a good life. Art has played an important role in her formative years in Romania (she graduated the Arts High School in Cluj) and throughout her experience living in Montreal, a city with one of the most vibrant artists’ diaspora of Romanian descent in North America. Alexandrina brings to ARCS her action-oriented approach to life in general, and her valuable background in project development, business and community outreach."
        }
    ];

    $scope.advisoryBoard = [
        {
            name: "Elizabeta Iliescu",
            title: "Children's Program Coordinator",
            email: "elizabeta.iliescu@arcsproject.org",
            imagePath: "IMG_20170904_182543.jpg",
            details: "Elizabeta was born in Northern Romania where she grew up very attached to her grandparents. After high school, she moved to Bucharest where she studied physics and worked for an insurance company. She moved to the US with her family in 2008, and spent a few years just playing with her kids. The love of being around children made her look for opportunities to work with them. She worked and volunteered in different early childhood education programs. She is currently working with Bellevue School District in its Early Learning Programs. She obtained an AAS-T in Early Childhood Careers and is enrolled for a BA in Mathematics."
        }
    ];

    $scope.alumni = [
        {
            name: "Angela Draghicescu",
            title: "Music Programs Coordinator",
            imagePath: "AngelaDraghicescu.jpg",
            details: "Pianist Angela Drăghicescu has quickly established a reputation as a much sought-after collaborative artist and chamber musician. Recent engagements have included performances at Carnegie Hall, Kennedy Center, Benaroya Hall, Rudolfinium Prague, George Enescu Philharmonic, Behague Palace, Hindemith Institute, Mahidol Auditorium, as well as many other venues in Europe, the US, and Asia. Currently Collaborative Pianist at University of Puget Sound, Angela Drăghicescu is also one of the official pianists of the prestigious George Enescu International Competition. Her doctoral thesis “Nicolae Bretan: A Guide to Romanian Art Song” is the first textbook for Romanian diction for singers and has become an invaluable source for non-native speakers wishing to perform Romanian Art Song. Through her work with the world-renowned leading artists of the international music scene, Angela hopes to further promote the Romanian musical heritage and continue to reinforce ARCS’s mission to reach the hearts of all music lovers throughout the world.",
            years: "2017"
        },
        {
            name: "Alexandra Dorca",
            title: "Fundraiser",
            imagePath: "AlexandraDorca.jpg",
            years: "2015 - 2017",
            details: "Alexandra Dorca is an anthropologist born in Romania. Before moving to Seattle in late 2013, she lived in Montreal for ten years. Her previous work experience includes teaching and consulting in social anthropology, intercultural communication, and international cooperation—in Canada and various European countries. Alexandra has a strong background in project management for nonprofit associations—a valuable asset to ARCS. At present, she teaches French classes at l’Alliance française de Seattle, with a special focus on contemporary culture and society, lifestyle, media, and cinema. She is helping ARCS with fundraising, project implementation, and event organization."
        },
        {
            name: "Gloria Man",
            title: "Visuals Coordinator",
            imagePath: "GloriaMan.jpg",
            years: "2015 - 2017",
            details: "Gloria Man is a German Language Instructor and Ph.D. Candidate in Germanics at the University of Washington. A native of Timisoara, Gloria grew up bilingual, German-Romanian in a multiethnic family. Her upbringing in a multicultural environment instilled in her a life-long curiosity and respect for different cultures, interests that drive her academic and professional activities. Gloria's professional experience as a translator, interpreter, and foreign language teacher includes working with global corporations such as Continental, Siemens, and Daimler-Chrysler, both in Europe and in the USA. Gloria brings to ARCS a passion for intercultural dialogue, expertise in the field of German speaking cultures, and experience in corporate communications."
        },
        {
            name: "Daniel Man",
            imagePath: "DanielMan.jpg",
            years: "2015 - 2017",
            details: "Daniel was born in Timisoara, Romania. He is a software developer with a strong interest in photography and digital media. Daniel also helps the organization with design and branding, from the ARCS logo to the brochures and fliers as well as acting as the official photographer for a lot of ARCS events."
        },
        {
            name: "Marchette DuBois",
            imagePath: "MarchetteDuBois.jpg",
            years: "2014 - 2016",
            details: "Marchette DuBois is a coordinator for Balkan and Romanian music and culture networks in the greater Seattle region. Her band Bucharest Drinking Team performs a large repertoire of songs from Eastern Europe. A native of New York, she studied music at SUNY Potsdam. Marchette learned Romanian in Cluj and at the University of Washington and has travelled throughout the Balkans in search for new tunes and inspiration.Marchette will bring to ARCS her music and passion, firsthand knowledge of the region and expertise in community outreach and cultural project planning."
        },
        {
            name: "Daniella Drader",
            imagePath: "DaniellaDrader.jpg",
            years: "2015 - 2016",
            details: "Daniella helps families navigate the school system through her work in the World Family Center at Seattle World School, a school centered around ELL students. Additionally, she works with Seattle Parks and Recreation in experiential education programs. After earning her undergraduate degree in Communications and Psychology, she spent time working with youth outdoors and in Native American land management before completing her Masters in Natural Resource Sciences. In the early 80s, Daniella’s family came over as political refugees from Transylvania, Romania. Struggling to find balance between two cultures led her to develop a love of the natural world, where she found refuge and adventure. Daniella hopes her passion for the outdoors will bridge the cultural differences into a mutual respect of both countries."
        },
        {
            name: "Ioana Miron",
            imagePath: "IoanaMiron.jpg",
            years: "2014 - 2015",
            details: "Ioana is a native of Romania who came to Seattle in 1999. She is an attorney practicing in the area of immigration law and a partner in a small Seattle law firm that she co-founded. Ioana brings to ARCS many years of legal and business management experience as well as a personal understanding of the immigrant's emotional experience of living in, and sometimes in-between two worlds. Ioana believes that Eastern Europe in general, and Romania in particular are underrepresented in the cultural landscape of the greater Seattle area. Through her involvement with ARCS, she wants to bring that part of the world, with its rich history, incredible ethnic diversity, and unique culture to the Seattle public."
        },
        {
            name: "Maria Gerea",
            imagePath: "MariaGerea.jpg",
            years: "2014 - 2015",
            details: "Maria Gerea is a Marketing Manager with over 10 years of experience working in several large corporations, managing complex programs and leading cross-functional and cross-cultural teams. Born in Romania into a family of music professionals, Maria has developed a passion for opera, classical music and theatre early on. Also a citizen of Croatia where her mother spent many years as a lead opera singer for the Croatian National Opera House in Split, Maria will bring to ARCS her rich knowledge and understanding of Eastern European cultures and traditions, as well as her experience in business development and marketing."
        },
        {
            name: "Lori Walls",
            imagePath: "LoriWalls.jpg",
            years: "2014 - 2015",
            details: "Lori has many years of legal and business management experience as an immigration lawyer and partner in a Seattle law firm that she co-founded. As a member of the American Immigration Lawyers Association (AILA), Lori has served for many years as Secretary and Membership Chair of AILA's Washington chapter. Her deep commitment to the cause of immigrant rights has been manifest since she attended law school at the University of Washington. While a law student, Lori participated in the Immigration Clinic at the Northwest Immigration Rights Project, volunteered with the King County Bar Association's Neighborhood Legal Clinic Program, and received the Charles Z. Smith Public Service Student of the Year Award in 2007. Lori's involvement with ARCS springs from her interest in the immigrant story as illustrated both by works of art and by the very real life stories of her clients and her friends."
        }
    ];
};