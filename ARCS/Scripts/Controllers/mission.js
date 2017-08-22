angular.module("arcsApp").component("mission", {
    templateUrl: "../../Views/mission.html",
    controller: MissionController
});
function MissionController($scope) {
    $scope.statements = [
        {
            title: "Visual Arts (Film, Photography, Painting)",
            description: [
                "Organize an annual Romanian Film Festival in the Seattle area that will focus on today's internationally acclaimed \"New Romanian Cinema\"",
                "Sponsor and support the participation of Romanian movies and artists in the Seattle International Film Festival (SIFF)",
                "Promote visual artists (painters, photographers, sculptors, etc) of Romanian nationality or descent, as well as international artists whose work fits into our mission and cultural agenda"
            ],
            imagePath: "paint.jpg"
        },
        {
            title: "Performing Arts (Music, Theater, Dance)",
            description: [
                "Organize and promote performances of Eastern European folk music and dance that will reflect the ethnic diversity of the area, as well as the reciprocal influences between various ethnic groups",
                "Organize and promote classical music concerts of Romanian composers, as well as modern dance or classical ballet performances",
                "Popularize Romanian theater by working with the Seattle and King County network of theaters and actors to enhance the number of productions of plays written by Romanian born playwrights, as well as by inviting non-local Romanian, American, or other international productions, of Romanian plays"
            ],
            imagePath: "bass.jpg"
        },
        {
            title: "Literature",
            description: [
                "Initiate translation projects and the publication of contemporary Romanian writers, as well as the promotion of any American or Romanian- American writers whose works explore issues related to immigration, cross-cultural identity, bilingualism, exile and integration, pertaining to the experience of the Romanian diaspora in the US"
            ],
            imagePath: "carti.jpg"
        },
        {
            title: "Education",
            description: [
                "Organize conferences and lectures that will generate discussion forums for those interested in Romanian history, politics and culture, in view of increasing awareness of the valuable place that the American Romanian cultural heritage holds among the diverse ethnic communities of the Pacific Northwest and North America at large"
            ],
            imagePath: "grads.jpg"
        }
    ];
}
;
