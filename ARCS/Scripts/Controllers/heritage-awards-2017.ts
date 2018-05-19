angular.module("arcsApp").component("heritageAwards2017", {
    templateUrl: "../../Views/heritage-awards-2017.html",
    controller: HeritageAwards2017
});

function HeritageAwards2017($scope) {
    $scope.awardees = [
        {
            name: "Silvia Calinov",
            school: "Nikola Tesla STEM High School, Redmond WA",
            award: "Platinum, National",
            scholarship: "*"
        },
        {
            name: "Alexandru Trufinescu",
            school: "Redmond High School, Redmond WA",
            award: "Gold, National",
            scholarship: "*"
        },
        {
            name: "Stefan Ene",
            school: "Sunset High School, Portland OR",
            award: "Silver, National",
            scholarship: "*"
        },
        {
            name: "Andreea Tara Stanescu",
            school: "Eastlake Highschool, Sammamish WA",
            award: "Gold, West",
            scholarship: "*"
        },
        {
            name: "Jasmine Carabat",
            school: "Interlake High School, Bellevue WA",
            award: "Platinum, West",
            scholarship: "$1,000"
        },
        {
            name: "Matei Fawzy",
            school: "Walt Whitman High School, Bethesda MD",
            award: "Platinum, East",
            scholarship: "$500"
        },
        {
            name: "Cami Simpson",
            school: "Durham Academy, Durham NC",
            award: "Platinum, South",
            scholarship: "$500"
        },
        {
            name: "Sofia Constantinescu",
            school: "Cheshire Highschool, Cheshire CT",
            award: "Platinum, North East",
            scholarship: ""
        },
        {
            name: "Diana Sambotin",
            school: "Skyline High School, Sammamish WA",
            award: "Gold, Wests",
            scholarship: ""
        },
        {
            name: "Stefan Homentcovschi",
            school: "Monte Vista High School, Danville CA",
            award: "Silver, Wests",
            scholarship: ""
        }
    ];
};