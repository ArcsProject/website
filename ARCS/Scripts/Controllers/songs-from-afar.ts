angular.module("arcsApp").component("songsFromAfar", {
    templateUrl: GetUrlWithVersion("../../Views/songs-from-afar.html"),
    controller: SongsFromAfarController
});

function SongsFromAfarController($scope, $sce) {
    $scope.elevation = [
        {
            name: "Abraham Burton",
            imagePath: "burton.png",
            details: [
                $sce.trustAsHtml("New York saxophonist Abraham Burton's music has been called exquisite jazz. New York Times says about Burton “If the young saxophonist Abraham Burton was ever to be drawn in a cartoon, he’d have flames coming out of his saxophone. His solos are powerful and creative” He began developing his natural skills by attending Hartford's Hartt School of Music where he learned well from talented artists like Michael Carvin and Jackie McLean. Burton graduated from the school with a B.A. in music and a new love for the work of jazz greats such as Louis Armstrong and Lester Young. In 1992, the young Burton became a member of the Wailers, a jazz band headed by longtime artist Arthur Taylor. The group released two albums together. They also did a number of tours through Europe. He went on to form his own band in '94 entitled \"The Abraham Burton Quartet\" which recorded \"Closest to the Sun\", \"The Magician\" and “Cause and Effect” the latter being a collaboration with drummer extraordinaire Eric McPherson, on the Enja Records label.  Abraham attributes much of his success from experiences acquired performing, touring and recording with masters and being affiliated with numerous and notable musicians such as Roy Haynes, Louis Hayes, Walter Bishop jr, Horace Tapscott, Kenny Barron, Jimmy Smith, John Hicks, Santi Debriano, Bill Saxton, Gary Bartz, Victor Lewis, Michael Carvin, Mulgrew Miller, Steve Nelson, Cindy Blackman, Ray Drummond, Terumasa Hino, Billy hart, Peter Washington, Conrad Herwig, Steve Davis, Grisella Oliphant, Rein De Graff, Nasheet waits, Eric McPherson, Eddie Henderson, David Murray, Antoine Rooney, James Carter, Yosuke Inoue, James Hurt, Marc Cary, Sam Newsome, Duane Eubanks, Winton Marcellus, Roy Hargrove, Wallace Rooney, Cyrus Chestnut, Christian McBride. For more info: <a href=\"www.abrahamburtonjazz.com\" target=\"_blank\">www.abrahamburtonjazz.com</a>")
            ]
        },
        {
            name: "Lucian Ban",
            imagePath: "ban.png",
            details: [
                $sce.trustAsHtml("Lucian Ban was raised in a small village in northwest Transylvania, in “the region where Bartók did his most extensive research and collecting of folk songs” and grew up listening to both traditional and classical music. He studied composition at the Bucharest Music Academy while simultaneously leading his own jazz groups, and notes that his approach to improvisation has been influenced by “the profound musical contributions of Romanian modern classical composers like Aurel Stroe, Anatol Vieru and of course Enesco.” Desire to get closer to the source of jazz brought him to the US, and his ensembles have included many of New York’s finest players. Twice nominated in 2005 & 2006 for prestigious Hans Koller “Best European Jazz Musician Preis“Award, Ban currently lives in New York City where is part of the next generation of performers & composers at the forefront of contemporary modern jazz. He has released 11 albums as a leader for Sunnyside Records, Jazzaway, and ECM Records. Lucian Ban has performed/recorded with among others: Alex Harding, Barry Altschul, Gerald Cleaver, Bob Stewart, Badal Roy, Tony Malaby, Mark Helias, Sam Newsome, Art Baron, Curtis Fowlkes, Gene Jackson, Nasheet Waits, Pheeroan AkLaff, Reggie Nicholson, Drew Gress, J.D.Allen, Essiet Essiet, Chris Dahlgren, Brad Jones, among many others. <a href=\"www.lucianban.com\" target=\"_blank\">www.lucianban.com</a>")
            ]
        },
        {
            name: "Brad Jones",
            imagePath: "jones.png",
            details: [
                $sce.trustAsHtml("Brad Jones was born in New York City and raised in Teaneck, New Jersey. His solid, inventive, and versatile playing on both the electric and acoustic bass has established him as one of the most sought-after musicians in the business. He first came to notoriety in the late 1980’s as a member of the musically hybrid-reaching band, The Jazz Passengers. He has since gone on to record, perform, and/or tour around the world with a diverse array of artists that include Ornette Coleman, Elvis Costello, Elvin Jones, David Byrne, Muhal Richard Abrams, Sheryl Crow, Deborah Harry, Dave Douglas, Vernon Reid, John Zorn, Don Byron, and Marc Ribot to name just a few. As a leader, Brad has recorded three CDs: \"UNCIVILIZED POISE\" (Knitting Factory Records) with his band, Aka Alias, \"POURING MY HEART IN\" with the Brad Jones Quartet, and the soon to be released follow-up to the first Aka Alias recording entitled \"THE EMBODIMENT\". For more info, bio, sound samples, press please visit: <a href=\"www.bassjones.com\" target=\"_blank\">www.bassjones.com</a>")
            ]
        },
        {
            name: "Billy Hart",
            imagePath: "Billy Hart (ECM Records).jpg",
            details: [
                $sce.trustAsHtml("William \"Billy\" Hart is a jazz drummer and educator who has performed with some of the most important jazz musicians in history. Early on Hart performed in Washington, D.C. with soul artists such as Otis Redding and Sam and Dave, and then later with Buck Hill and Shirley Horn, and was a sideman with the Montgomery Brothers (1961), Jimmy Smith (1964–1966), and Wes Montgomery (1966–1968). Hart moved to New York in 1968, where he recorded with McCoy Tyner, Wayne Shorter, and Joe Zawinul, and played with Eddie Harris, Pharoah Sanders, and Marian McPartland. Hart was a member of Herbie Hancock’s sextet (1969–1973), and played with McCoy Tyner (1973–1974), Stan Getz (1974–1977), and Quest (1980s), in addition to extensive freelance playing (including recording with Miles Davis on 1972’s On the Corner).  At age 76, Billy Hart works steadily and teaches widely. Since the early 1990s Hart spends considerable time at the Oberlin Conservatory of Music, and is adjunct faculty at the New England Conservatory of Music and Western Michigan University. He also conducts private lessons through The New School and New York University."),
                $sce.trustAsHtml("More Here: <a href=\"https://www.billyhartmusic.com\" target=\"_blank\">https://www.billyhartmusic.com</a>")
            ],
            credit: "ECM Records"
        },
        {
            name: "Mat Maneri",
            imagePath: "Mat Maneri.jpg",
            details: [
                $sce.trustAsHtml("A 2006 Grammy Nominee for “Best Alternative Album”, Mat Maneri has defined the voice of the viola and violin in jazz and improvised music over the course of a twenty-five year career. Born in Brooklyn, Maneri has established an international reputation as one of the most original and compelling artists of his generation, praised for his high degree of individualism, a distinctive marriage of jazz and microtonal music, and his work with 20th century icons of improvised music. As a young musician, Maneri was influenced by the sounds of his childhood home. His father, saxophonist and composer Joe Maneri, was on faculty at the New England Conservatory, and colleagues like Ran Blake and Gunther Schuller were frequent visitors. In 1990, Mat co-founded the legendary Joe Maneri Quartet with his father, drummer Randy Peterson and bassists Ed Schuller and John Lockwood. The quartet’s recordings for ECM Records, Hatology and Leo Records were widely acknowledged by critics and fellow musicians as among the most important developments in 20th century improvised music. Maneri’s 1999 solo debut on ECM Records marked his emergence as a musician with a singular, uncompromised voice. Pianist Matt Shipp called him “one of the five greatest improvisers on the planet”, reflecting a growing consensus of Maneri as a central figure in American creative music. Since then, the long list of musicians with whom he has worked includes icons such as Cecil Taylor, Paul Bley, Paul Motian and William Parker, as well as influential bandleaders such as Joe Morris, Vijay Iyer, Matthew Shipp, Marilyn Crispell, Joelle Leandre, Kris Davis, Tim Berne and Craig Taborn. Maneri’s recordings as a leader (trio, quartet and quintet) have been documented on Hatology, Aum Fidelity, Leo Records and Thirsty Ear."),
            ],
            credit: "Elmar Lemes"
        }
    ];

    $scope.ensemble = [
        {
            name: "Angela Drăghicescu",
            imagePath: "AngelaDraghicescu.jpg",
            details: [
                "Hailed by the New York Times as “elegant and spectacular” and “awesome at the piano” (Frettabladid, Iceland) pianist Angela Drăghicescu has quickly established an international reputation as a much sought-after collaborative pianist, chamber musician and teacher.  Recent engagements have included performances at Carnegie Hall in New York, The Kennedy Center in Washington, D.C., Seattle Symphony’s Benaroya Hall; The Concertgebouw in Amsterdam, Salle Gaveau in Paris, Rudolfinium in Prague, George Enescu Philharmonic in Bucharest, and Harpa in Iceland.She has performed with many of today’s leading artists including Maxim Vengerov, the Concertmaster of the New York Philharmonic Frank Huang, Concertmaster of the Concertgebouw Liviu Prunaru, violinist Alexandru Tomescu, Metropolitan Orchestra trumpeter Peter Bond, Canadian Brass trombonist Achilles Liarmankopoulos, French hornist Jeff Nelsen, Chicago Symphony Principal bassoonist Keith Buncke, cellists David Requiro and Josephine Knight, to name but a few.",
                "A passionate teacher, Ms Drăghicescu currently serves as Assistant Professor of Collaborative Piano at University of South Alabama, having previously served as Instructor of Collaborative Piano at University of Puget Sound, Visiting Collaborative Piano Faculty at Seattle Conservatory, and staff accompanist at University of Washington, Seattle Pacific University and Southeastern Louisiana University.She is currently on the faculties at the Brian Lewis Young Artist Program (Ottawa, KS),  Enescu World Music International Festival (Romania), and is guest pianist for the distinguished Embassy Concert Series in Washington D.C., working closely with U.S.and international State Department officials.Angela Drăghicescu is the official accompanist for the George Enesco Competition having been selected under the direction of Zubin Mehta and Vladimir Jurowski."
            ],
            title: "Piano"
        },
        {
            name: "Stephen Schermer",
            imagePath: "Steve Schermer.jpg",
            details: [
                "Stephen Schermer performs with the band Torch, the Pacific Northwest Ballet Orchestra, and the North Corner Chamber Orchestra and teaches at University of Puget Sound. Previously he has held positions with the Oregon Symphony and the Spokane Symphony. He is active in the recording industry, is sought after as a clinician, coach, and adjudicator, and as a chamber musician throughout the Pacific Northwest. Mr.Schermer received his BA with honors from Eastern Washington University, and his MM with honors from the New England Conservatory."
            ],
            title: "Double Bass"
        },
        {
            name: "Brittany Boulding",
            imagePath: "Brittany Boulding, jpg.jpg",
            details: [
                "Violinist Brittany Boulding, a member of the Seattle Symphony and ‪Seattle Opera Orchestra, has appeared most recently as a soloist with the Olympia Symphony, Northwest Sinfonietta, Auburn Symphony Orchestra, ‪Pacific Northwest Ballet Orchestra, Bainbridge Symphony Orchestra, Seattle Festival Orchestra, ‪Thalia Symphony Orchestra, Cascade Symphony Orchestra, New Haven Symphony Orchestras, Spoleto USA, and the Orquesta de Camara Concerto Sur (Cuba).  Her major music festival appearances include Tanglewood, Spoleto, Aspen, Vail, Banff and Bellingham.",
                "Ms.Boulding has performed as Concertmaster throughout the United States and internationally.Currently she is Concertmaster of the Northwest Sinfonietta and the Auburn Symphony. A passionate chamber musician, she is a member of the Finisterra Trio and can be seen performing at chamber festivals such as the ‪Methow Valley, Simple Measures, Second City, Seasons, Russian Chamber Music Foundation, Guemes Island, Vashon, Bainbridge, Auburn, Cornish, Jacobsen and New Lens Series.Ms.Boulding earned her Bachelor of Music from Rice University with Kenneth Goldsmith and her Professional Studies Certificate from the Colburn Conservatory under the tutelage of Robert Lipsett.A Pacific Northwest native, Ms. Boulding grew up performing and recording with her family, the internationally acclaimed Magical Strings."
            ],
            title: "Violin"
        },
        {
            name: "Rajan Krishnaswami",
            imagePath: "Rajan Krishnawami, cello .jpg",
            details: [
                "Juilliard graduate and Fulbright Fellow Rajan Krishnaswami has toured nationally and internationally as a recitalist and soloist with orchestra.He continues to play recitals regularly with his longtime duo partner, pianist Mark Salman. Chamber music being his first love, in 2005 he founded Simple Measures, an innovative Chamber Music Series in the Puget Sound, WA area.This series was recently closed after 11 very successful seasons. He now appears regularly with various ensembles in and around Seattle including with Spectrum Dance Theater, and on various chamber music series including Town Hall. Equally devoted to the arts of teaching and performing, he is well established as an important learning resource for serious cellists, both student and professional.He has been on the cello faculty of the University of Washington, and Cornish College of the Arts.He has performed extensively with the Seattle Symphony and Opera.An entrepreneur, he runs several businesses with his wife Maleah from his enchanting houseboat on Lake Union in Seattle."
            ],
            title: "Cello"
        },
        {
            name: "Aaron Conitz",
            imagePath: "Aaron Conitz, jpg.jpg",
            details: [
                "Aaron Conitz, violist, is a dynamic performer and thoughtful musician. He has appeared as a featured soloist with the Aspen Contemporary Ensemble and the National Repertory Orchestra, and as a collaborative artist in the Archipelago Collective (San Juan Island, WA), Aspen Art Museum Summer Series, Arts Renaissance Tremont, and Aspen Music Festival.Conitz has performed alongside acclaimed musicians such as Darrett Adkins, Elaine Douvas, Victoria Chiang, and Paul Kantor. Aaron is the recipient of several awards and fellowships including the Frances Walton Competition (Ladies Musical Club of Seattle), Susan and Ford Schumann Fellowship (Aspen Contemporary Ensemble), and the prestigious New Horizons Fellowship.As an orchestral musician, Conitz appears with the Seattle Symphony, has served as principal violist with the National Repertory Orchestra, and performed with the Hawai’I Symphony, Seattle Opera, Spoleto Festival Orchestra (USA), Mercury: The Orchestra Redefined, and as a member of the Canton Symphony.",
                "Aaron began his musical instruction at the age of four. He has received both Bachelor and Master of Music degrees from the Cleveland Institute of Music and is currently a Candidate for the degree Doctor of Musical Arts at Rice University."
            ],
            title: "Viola"
        },
        {
            name: "Maria Sampen",
            imagePath: "MARIA SAMPEN.jpg",
            details: [
                "Maria Sampen enjoys a vibrant musical career as a soloist, chamber musician, recording artist and teacher.She is in demand as a performer of both standard repertoire and new and experimental works.Her concert engagements have taken her around the world, and she has played in Europe, Asia, and all over the United States and Canada.In addition to her busy performing schedule, Ms.Sampen is a dedicated teacher.She is Professor of Violin at the University of Puget Sound in Tacoma, WA.During her tenure at Puget Sound she has twice received the university’s Thomas A.Davis Teaching Award for excellence in teaching.Her students have won top awards in national competitions including the Music Teacher National Association Competition, and the American String Teachers Association Competition. In the summertime, Ms. Sampen performs at the Walla Walla Chamber Music Festival in Eastern Washington (wwcmf.org). She was on the faculty of the Brevard Music Festival in North Carolina (brevardmusic.org) from 2008- 2012 and the Icicle Creek Chamber Music Institute (2014-15). During the academic year, Ms. Sampen performs frequently with her new music group, Brave New Works (bravenewworks.org), the IRIS Orchestra (Germantown, TN), and the Puget Sound Piano Trio.Her major teachers include Paul Kantor, Kenneth Goldsmith and Paul Makara."
            ],
            title: "Violin"
        }
    ];

    $scope.reviews = [
        {
            text: "Ban has taped an essential source . . . there’s an alluring timelessness and strong life-force that seem to flow through the music created by Lucian Ban’s quartet on Songs from Afar",
            source: "James Hale, Downbeat"
        },
        {
            text: "Songs From Afar is a triumph of emotional and musical communication, and is not to be missed",
            source: "All About Jazz"
        },
        {
            text: "Pianist Lucian Ban sends a love letter to his native Romania An inspiring and touching journey that seamlessly blends the traditions of jazz and folk songs",
            source: "New York City Jazz Record"
        },
        {
            text: "Tarmure stately vocals",
            source: "Downbeat"
        },
        {
            text: "Tarmure’s hypnotic voice",
        },
        {
            text: "The mournful tone of Tarmure’s powerful voice",
            source: ""
        },
        {
            text: "Like Wayne Shorter, McCoy Tyner and other vanguard bandleaders of that era, the Romanian born pianist composer Lucian Ban alongside intense saxophonist Abraham Burton, bassist John Hebert and drummer Eric McPherson favor searching post bop that cranes toward the avant-garde without losing the buoyancy of swing",
            source: "Time Out New York"
        },
        {
            text: "Elevation has established itself as a unique voice in the world of jazz. The group has taken elements of modern jazz and the avant-garde, employing musicians who have been movers in both, creating an original direction. ELEVATION is an enlightened state of mind and this music is certain to take you there",
            source: "Jazz Inside"
        },
        {
            text: "Mat Maneri has changed the way the jazz world listens to the Violin & Viola.",
            source: "All About Jazz"
        },
        {
            text: "Violist Mat Maneri has a sound all his own: with his mahogany tone and muscular low register, he slithers from note to note like a satiated snake.",
            source: "Chicago Reader"
        },
        {
            text: "The majestic drummer Billy Hart brought his extraordinary ability to both respond to and spontaneously shape a band’s conception to three performances with three different groups. Freedom, discipline, daring, passion, swing, broken rhythm, orchestral textures, interactive sparring, shocking dynamics, astounding creativity and authority. Want to know what jazz is really about? Listen to Billy Hart.",
            source: "Mark Stryker, Detroit Free Press"
        },
        {
            text: "There is an alluring timelessness to the music created by pianist Lucian Ban's quartet on Songs From Afar. The group plays without artifice, whether mining Transylvanian folk music or paying tribute to Sun Ra. This is an especially powerful program that reveals new high points with each listen. Ban has tapped an essential source.",
            source: "Best Albums of 2016, Downbeat"
        }
    ];
};