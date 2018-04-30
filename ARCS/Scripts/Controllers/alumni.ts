angular.module("arcsApp").component("alumni", {
    templateUrl: "../../Views/alumni.html",
    controller: AlumniController
});

function AlumniController($scope) {
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