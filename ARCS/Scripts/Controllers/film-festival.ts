angular.module("arcsApp").component("filmFestival", {
    templateUrl: "../../Views/film-festival.html",
    controller: FilmFestivalController
});

function FilmFestivalController($scope, $sce) {
    $scope.events = [
        {
            name: "Lucian Ban & Elevation: Songs from Afar",
            description: [
                `"Songs from Afar" a fusion concert with jazz musicians Lucian Ban & Elevation Quartet from New York, and their special guests Gavril Tărmure (voice) from Romania and Seattle–based Angela Drăghicescu (piano).`,
                "Don’t miss this one-of-a-kind concert where American jazz and improvisation will meet the rich Romanian folk repository and the classical legacy of composer George Enescu."
            ],
            date: new Date(2017, 10, 10),
            startTime: new Date(2017, 10, 10, 19, 30),
            endTime: new Date(2017, 10, 10, 21, 30),
            location: "Seattle Art Museum",
            locationLink: "https://www.google.com/maps/place/Seattle+Art+Museum/@47.607309,-122.373152,13z/data=!4m8!1m2!2m1!1sseattle+art+museum!3m4!1s0x54906ab22579184b:0x7b64e8eea04a8dc4!8m2!3d47.607309!4d-122.3381331",
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
        }
    ];

    $scope.donorsARCS = [
        "Roxana Arama",
        "Alina Popa",
        "Ana & Radu Bacioiu",
        "Otilia & Tudor Baraboi",
        "Gabriel & Raluca Hera",
        "Ramona & Marian Pungan",
        "Jeffrey Gossett",
        "Dana Elena Cozmei",
        "Elena & Cosmin Catrinescu",
        "Irina & Cristi Salvan",
        "Daniel & Claudia Pravăț",
        "Alexandrina Măicăneanu & Radu Simionescu",
        "Ileana Marin & Jim Augerot",
        "Vasi Rusu (in memory of Eugenia Lup)",
        "Pierre Loebel",
        "Souren Aghajanyan"
    ];

    $scope.donorsA = [
        "Mary Sherhart",
        "Alexandra Dorca & Richard Pavy",
        "Gabriel Ghizila",
        "Carmen Rautu",
        "Andrei Marinescu",
        "Alexey Palladin",
        "Ioana Miron",
        "Anonymous"
    ];

    $scope.donorsR = [
        "Radu Palanca",
        "Stefan Saroiu",
        "Elena & Adrian Fanaru",
        "Ovidiu Constantin",
        "Carl Winter",
        "Elena Boris",
        "Geanina Andreiu",
        "Cezar Ungureanașu",
        "Maria Gerea",
        "Ancuța Zaharia",
        "Verena Kuzmany",
        "Ligia Cicos",
        "Ana Ilac",
        "Andrei Zlati",
        "Nick Voicu",
        "Cristina Teodorescu",
        "Anca Ionescu",
        "Ioana Pop",
        "Yuko Mera",
        "Anonymous (2)"
    ];

    $scope.donorsC = [
        "Lisa Friedli",
        "Smaranda Lieuallen",
        "Seattle2Europe",
        "Calin Popa"
    ];

    $scope.donorsS = [
        "Maryna Ajaja",
        "Linda Morris",
        "Susan Picard",
        "Alexander Price",
        "Carol Arnold"
    ];

    $scope.partners = [
        {
            link: "http://www.icrny.org/",
            imagePath: "rciny_logo_Kb.png"
        },
        {
            link: "http://www.4culture.org/",
            imagePath: "4culture.png"
        },
        {
            link: "http://www.youragentnadia.com/",
            imagePath: "Logo-Schmieder.jpg"
        },
        {
            link: "http://www.traduterra.com/",
            imagePath: "TraduTerra.png"
        },
        {
            link: "https://cedarriverah.com/",
            imagePath: "IMG_logo_Aluas.jpg"
        }
    ];

    $scope.sponsors = [
        {
            link: "http://www.nwfamilydental.net/",
            imagePath: "nwdental.png"
        },
        {
            link: "http://www.drlarhs.com/",
            imagePath: "ad-logo.jpg"
        },
        {
            link: "http://www.mehlinglawfirm.com/",
            imagePath: "logo2.jpg"
        },
        {
            link: "https://www.redfin.com/",
            imagePath: "Redfin LOGO.jpg"
        }
    ];

    $scope.guests = [
        {
            name: "Monica Filimon",
            imagePath: "monica_filimon.jpg",
            details: $sce.trustAsHtml("Monica Filimon is currently Assistant Professor of English at Kingsborough Community College, CUNY. She holds a Ph.D. in Comparative Literature from Rutgers (2011) and has published articles on French, German and Romanian cinema. Monica is now working on a book about Cristi Puiu's relevance to Romanian and world cinema, entitled Cristi Puiu: Ineffable Experiences of the Profane World. We are looking forward to welcoming her in Seattle at our festival for the fourth time, as a moderator and presenter.")
        },
        {
            name: "Ioana Flora",
            imagePath: "IMGL9962.jpg",
            details: $sce.trustAsHtml("Ioana Flora is a preeminent Romanian theater and film actress, born and raised in Serbia. One of her most important lead roles was in Cristi Puiu's <i>Stuff and Dough</i>, the first Romanian picture selected in 2001 at Cannes and considered as the starting point of the internationally acclaimed New Romanian Cinema. Ioana received many prestigious prizes, among which the <b>Best Actress Award</b> at the Thessaloniki Film Festival for <i>Hooked</i> (2008), directed by Adrian Sitaru, <b>Best Supporting Role</b> for <i>Outbound</i> (2012), directed by Bogdan Apetri, <b>Best Romanian Film Artist</b> in 2012, the Best <b>Actress Award</b> at the Aubagne International Film Festival for <i>A long Story</i> (2014), directed by Jorien van Nes. In 2014 she was awarded the <b>Best Actress Award</b> by the Romanian Cinema Union for her part in <i>Deja Vu</i>. She recently received the <b>Best Leading Role Award</b> for <i>Back Home</i> (2016), directed by Andrei Cohn and the <b>Best Actress Award</b> by the Romanian Cinema Union (2016).")
        },
        {
            name: "Iulia Rugină",
            imagePath: "Iulia Rugina_2017_foto credit Claudiu Dumitru.jpg",
            details: $sce.trustAsHtml("Since 2002, she has co-written and directed 10 shorts and 3 features. Her debut film, Love Building, a micro budget comedy, was ranked 2nd in the local box office and was followed by the film’s sequel, Another Love Building. She has just completed her third feature, Breaking News, which was screened and awarded at Karlovy Vary IFF and will has started its theatre circuit in September. Highly involved in film education, she is currently teaching Screenwriting at the National University of Theatre and Film in Bucharest and is pursuing a PhD focused on the low budget phenomenon in world cinema.")
        },
        {
            name: "Paul Negoescu",
            imagePath: "photo pn.jpg",
            details: $sce.trustAsHtml("Born in 1984 in Bucharest. He studied film directing at the national film school. He directed several short films that were awarded and selected in many international film festivals, including Cannes (Semaine de la Critique - 2012), Berlin (2008, 2009 and 2010), Karlovy Vary, Slamdance or Rotterdam. Two of his short films (Renovation and Derby) were nominated at the European Film Academy Awards in 2009 and 2011. His first feature film, \"A month in Thailand\" premiered at the Venice Film Festival (International Critics' Week) in 2012 and was awarded with the FIPRESCI prize in the Sofia International Film Festival. His second feature film, Two Lottery Tickets, a micro-budget independent film, became the most successful Romanian film at the box office in the modern era of film distribution and it was also very well received by critics and festivals. He is currently in post-production with his third film, Never Let It Go.")
        },
        {
            name: "Bogdan Darev",
            imagePath: "BogdanDarev.jpg",
            details: $sce.trustAsHtml("A Bulgarian emigrant of 22 years who is still very connected to his heritage, gifted producer/director <a href=\"http://bogdandarev.com/\" target=\"_blank\">Bogdan Darev</a> recognizes the role of film in preserving and celebrating cultures across the globe. His most recent documentary film endeavor \"Kaval Park\" is far from about and for Bulgarians only, but an important document of authenticity for all cultures to recognize a part of themselves in. With his last documentary <a href=\"http://thisbaba.com/\" target=\"_blank\">\"This Baba\"</a> Bogdan Darev proved that a documentary journey can also be a cinematic one, a visual poem full of music, emotion and stories for audiences across all ages and cultures to connect to. In addition to documentary films, Bogdan continues to express himself in music videos, photography, literature and is currently developing several fictional film projects.")
        },
        {
            name: "Penka Encheva",
            imagePath: "ThisBabaFBprofile.jpg",
            details: $sce.trustAsHtml("Singer Penka Encheva immigrated to America to care for her grandchildren at age 67. Unexpectedly, and to her greatest joy, she recorded her first CD a year later. Penka loves her weekly meetings with the Bulgarian Voices of Seattle Women's Choir and is honored to be a guest at the Romanian Film Festival.")
        },
        {
            name: "Mary Sherhart",
            imagePath: "Mary with Flowers in Varna.jpg",
            details: $sce.trustAsHtml("Mary Sherhart is a Seattle-based musician who specializes in traditional singing from the Balkans. She is a performer, teacher, choir director, producer, board member and student.")
        }
    ];

    $scope.films = [
        {
            name: "Two Lottery Tickets",
            description: [$sce.trustAsHtml("Three men from a provincial town are in urgent need of money and decide to buy a lottery ticket. They win the lottery, but soon after their ticket gets stolen. The three desperate men go on a journey to find their lost lottery ticket and experience all kinds of adventures... The screenplay is based on a short story by Romanian author I.L. Caragiale. A micro-budget independent production, it became the most successful film at the box office in the modern era of film distribution in Romania.")],
            artist: "Paul Negoescu",
            length: "1 hour, 26 minutes",
            genres: "Comedy",
            imagePath: "two lottery tickets - english poster.jpg",
            time: "Friday, November 17, 7:00 PM - 8:35 PM",
            year: "2016",
            guests: "Director Paul Negoescu",
            ticketLink: "https://www.siff.net/year-round-cinema/two-lottery-tickets"
        },
        {
            name: "The Rest is Silence",
            description: [$sce.trustAsHtml("In 1911 the Romanian film director Grigore Brezianu and the financial tycoon Leon Popescu made a two hour long movie together titled \"Romania's Independence.\" This was their attempt at making a faithful screen adaptation of the real Independence War fought in 1877.  The Rest in Silence is the loose half-fictionalized story of this movie making experience.  Legendary director Nae Caranfil delights us once again with his signature dark humor and Hollywood -style filming techniques, bringing to life a lesser-known page of Romanian history.")],
            artist: "Nae Caranfil",
            length: "1 hour, 54 minutes",
            genres: "Drama",
            imagePath: "Afis Restul e tacere.jpg",
            time: "Saturday, November 18, 11:00 AM - 12:55 PM",
            year: "2007",
            ticketLink: "https://www.siff.net/year-round-cinema/the-rest-is-silence"
        },
        {
            name: "This Baba",
            description: [
                $sce.trustAsHtml("A production of the Bulgarian Cultural and Heritage Center of Seattle"),
                $sce.trustAsHtml("This Baba is a universal story of grandmothers who are divided between here and there, isolated by a lack of English, stuck in suburbs, and missing their friends and loved ones back home.Penka Encheva is one of these grandmothers.An extraordinary traditional singer as a young woman in her native Bulgaria, she immigrates to America at age 67 to care for her grandchildren. Having given up on her dreams to be a published singer long ago, This Baba gets a second chance. <a href=\"http://www.thisbabamovie.com\" target=\"_blank\">www.thisbabamovie.com</a>"),
                $sce.trustAsHtml("ARCS is happy to dedicate this special screening to one of Romania’s neighboring countries whose rich culture, history and traditions have many times crossed its own. The music celebrated in this documentary is in itself an example of the power and necessity of intercultural dialogue.")
            ],
            artist: "Bogdan Darev",
            length: "31 minutes",
            genres: "Documentary",
            imagePath: "thisbabamovie- Poster .jpg",
            time: "Saturday, November 18, 1:20 PM - 1:50 PM",
            year: "2014",
            guests: "Seattle-based director Bogdan Darev, singer Penka Encheva and producer Mary Sherhart",
            ticketLink: "https://www.siff.net/year-round-cinema/this-baba"
        },
        {
            name: "Sieranevada",
            description: [
                $sce.trustAsHtml("Considered by most to be the godfather of New Wave Romanian Cinema, director Cristi Puiu directs the follow up film to his critically acclaimed 2005 drama, <i>The Death of Mr. Lăzărescu</i>. <i>Sieranevada</i> takes place three days after the terrorist attack on the offices of the Parisian weekly Charlie Hebdo and forty days after the death of his Lary’s father. Lary, spends the Saturday at a family gathering commemorating the deceased, but the occasion does not go according to his expectations. Lary, a middle-aged doctor, is forced to confront his fears and past, to rethink the place he holds within the family, and constraint to tell his version of the truth.")],
            artist: "Cristi Puiu",
            length: "2 hours, 53 minutes",
            genres: "Drama",
            imagePath: "sieranevada_36000482_ps_1_s-high.jpg",
            time: "Saturday, November 18, 2:40 PM - 5:35 PM",
            year: "2016",
            guests: "Film critic Monica Filimon (Cristi Puiu, University of Illinois Press 2017)",
            ticketLink: "https://www.siff.net/year-round-cinema/sieranevada"
        },
        {
            name: "Breaking News",
            description: [
                $sce.trustAsHtml("Reporter Alex Mazilu is working on an in memoriam piece for a colleague, whose tragic death he indirectly caused.  In a small town on the Black Sea, just three days before Christmas, Alex fits together the puzzle pieces of this man’s life, with help from his troubled 15 year old daughter. Trying to redeem the dead father, he slowly starts taking his place.  Winner of the Special Jury Mention for the Best Newcomer at Karlovy Vary IFF 2017.")],
            artist: "Iulia Rugină",
            length: "1 hour, 21 minutes",
            genres: "Drama",
            imagePath: "breaking-news.jpg",
            time: "Saturday, November 18, 6:20 PM - 7:40 PM",
            year: "2017",
            guests: "Director Iulia Rugină, actress Ioana Flora",
            ticketLink: "https://www.siff.net/year-round-cinema/breaking-news"
        },
        {
            name: "Scarred Hearts",
            description: [
                $sce.trustAsHtml("During the summer of 1937, Emanuel, a young man in his early twenties, is committed to a sanatorium on the Black Sea coast for treatment of his bone tuberculosis. The treatment consists of painful spine punctures that confine him to a body cast on a stretcher-bed. Little by little, as Emanuel gets accustomed to the limitations of his new life, he discovers that inside the sanatorium there is still a life to be lived to the fullest. He makes friends and engages in conversations, political for the most part. He reads, he writes, he smokes and drinks, interacts with doctors, nurses and stretcher-bearers. He observes how healing seems to happen transiently, following mysterious laws: some patients get better, some worse, others die. He even has a romantic relationship, while Romania outside the sanatorium doesn‘t have much to offer him, turning more and more into an extreme right- wing society... Radu Jude’s fourth feature film has won acclaim on the world film festival circuit since its premiere in Locarno last year—notably for its frank approach (reflecting that of the film’s subject, the writer Max Blecher) to illness and death. Despite the subject matter, the film is anything but a “downer,” depicting both the absurdist humor of the protagonist’s situation and the zest with which he and his compatriots embrace life, limited though it may be.")],
            artist: "Radu Jude",
            length: "2 hours, 21 minutes",
            genres: "Drama",
            imagePath: "ScarredHearts2.jpg",
            time: "Sunday, November 19, 11:00 AM - 1:20 PM",
            year: "2016",
            ticketLink: "https://www.siff.net/year-round-cinema/scarred-hearts"
        },
        {
            name: "Two Lottery Tickets",
            description: [$sce.trustAsHtml("Three men from a provincial town are in urgent need of money and decide to buy a lottery ticket. They win the lottery, but soon after their ticket gets stolen. The three desperate men go on a journey to find their lost lottery ticket and experience all kinds of adventures... The screenplay is based on a short story by Romanian author I.L. Caragiale. A micro-budget independent production, it became the most successful film at the box office in the modern era of film distribution in Romania.")],
            artist: "Paul Negoescu",
            length: "1 hour, 26 minutes",
            genres: "Comedy",
            imagePath: "two lottery tickets - english poster.jpg",
            time: "Sunday, November 19, 1:45 PM - 3:10 PM",
            year: "2016",
            guests: "Director Paul Negoescu",
            ticketLink: "https://www.siff.net/year-round-cinema/two-lottery-tickets"
        },
        {
            name: "The New Gypsy Kings",
            description: [$sce.trustAsHtml("Dive straight to the heart of the astonishing world of Romania's super-rich Gypsy popstars: a world of fast cars, lavish houses and gangsters. The Roma community is one of Europe’s most marginalized and impoverished; for years their traditional music has been their most famous export. Now a new type of Gypsy sound called Manele has swept across the country. Manele stars can earn 20,000 euros a night at opulent weddings, with cash showered over them by guests. Their videos can get millions of hits on YouTube. But Manele is controversial - some of its lyrics glorify gangsterism and some of its biggest fans are notorious underworld figures. Traditional musicians, like the world-famous Taraf de Haïdouks, once championed by Johnny Depp, claim that Manele has put them out of business and that the new genre is destroying the Gypsy music brand. This film explores an extraordinary social and cultural change through its infectious soundtrack.")],
            artist: "Liviu Tipurita",
            length: "59 minutes",
            genres: "Documentary",
            imagePath: "Poster_NGK copy.png",
            time: "Sunday, November 19, 3:55 PM - 4:55 PM",
            year: "2016",
            ticketLink: "https://www.siff.net/year-round-cinema/the-new-gypsy-kings"
        },
        {
            name: "Back Home",
            description: [$sce.trustAsHtml("Robert (Alexandru Papadopol), a published poet and journalist from Bucharest, returns home to his native village, three years after his mother's death. Over the next 24 hours, he makes an outstanding effort to renegotiate his troubled relationship with his father and reconnects with his old friend Petrică (Andi Vasluianu) and his one-time teenage sweet-heart Paula (Ioana Flora). The three friends share an evening meal which culminates in surprising love-life revelations and long-buried grudges.")],
            artist: "Andrei Cohn",
            length: "1 hour, 31 minutes",
            genres: "Comedy",
            imagePath: "back-home.jpg",
            time: "Sunday, November 19, 5:35 PM - 7:05 PM",
            year: "2015",
            guests: "Actress Ioana Flora",
            ticketLink: "https://www.siff.net/year-round-cinema/back-home"
        },
    ];
};