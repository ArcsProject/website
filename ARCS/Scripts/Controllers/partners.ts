angular.module("arcsApp").component("partners", {
    templateUrl: GetUrlWithVersion("../../Views/partners.html"),
    controller: PartnersController
});

function PartnersController($scope) {
    $scope.sponsors = [
        {
            link: "http://www.icrny.org/",
            imagePath: "rciny_logo_Kb.png"
        },
        {
            link: "http://www.4culture.org/",
            imagePath: "4culture.png"
        },
        {
            link: "http://www.siff.net/",
            imagePath: "siff.png"
        },
        {
            link: "http://www.washington.edu/",
            imagePath: "uw.png"
        },
        {
            link: "http://ro-wa.org/",
            imagePath: "RO-WAneedle.png"
        }
    ];

    $scope.artists = [
        {
            name: "Romanian Folkloric Ensemble \"Datina Seattle\"",
            link: "https://www.facebook.com/datinaseattle"
        },
        {
            name: "Writer Roxana Arama’s Blog: Rewriting History",
            link: "http://www.roxanaarama.com"
        },
        {
            name: "Artist Daniel Ursache",
            link: "http://www.danielursache.com"
        },
        {
            name: "Photographer Daniel Man",
            link: "http://www.danielmanphoto.com"
        },
        {
            name: "Photographers Daniel and Timea Zilcsak (Northwest Clicks)",
            link: "https://nwclicks.com"
        },
        {
            name: "Alliance Francaise Seattle",
            link: "http://afseattle.org"
        },
        {
            name: "Alianța",
            link: "https://alianta.org"
        }
    ];

    $scope.churches = [
        {
            name: "Romanian Orthodox Church \"Three Hierarchs\"",
            link: "http://www.ortodox.org"
        },
        {
            name: "Romanian Orthodox Church \"Saints Joachim and Anna\"",
            link: "http://saintana.org/"
        },
        {
            name: "\"Good News\" Romanian Baptist Church",
            link: "https://www.facebook.com/pages/Good-News-Romanian-Baptist-Church-Seattle/205846862858327"
        },
        {
            name: "Church \"Speranta\" Seattle",
            link: "http://www.bisericasperanta.org/"
        },
        {
            name: "The First Romanian Penticostal Church",
            link: "http://www.frpcs.org"
        }
    ];

    $scope.associations = [
        {
            name: "Romanian-American Society of Washington State",
            link: "http://ro-wa.org/"
        }
    ];

    $scope.businesses = [
        {
            name: "NW Family Dental",
            link: "http://www.nwfamilydental.net/"
        },
        {
            name: "Euro Lounge Café",
            link: "http://www.euroloungecreperia.com/index.shtml"
        },
        {
            name: "Balkan Market",
            link: "http://www.balkanmarketltd.com/"
        },
        {
            name: "Pannonia Smokehouse",
            link: "http://www.carpatiasausage.com/"
        },
        {
            name: "Nadia Schmieder",
            link: "http://www.youragentnadia.com/"
        },
        {
            name: "Tradu Terra",
            link: "http://www.traduterra.com/"
        },
        {
            name: "Advanced Dentistry at Century Square",
            link: "http://www.drlarhs.com/"
        },
        {
            name: "Seattle2Europe",
            link: "https://www.facebook.com/Seattle2Europe/"
        }
    ];

    $scope.international = [
        {
            name: "FILIT - International Festival of Literature and Translation",
            link: "http://www.filit-iasi.ro/?lang=en"
        }
    ];
};