angular.module("arcsApp").component("summerCamp", {
    templateUrl: "../../Views/summer-camp.html",
    controller: SummerCamp
});

function SummerCamp($scope) {
};

class SummerCampData
{
    static selectedPayOption: any = null;

    static paymentOptions: any = [
        {
            options: [
                {
                    amount: 700,
                    msg: "Full payment for ARCS Summer Camp"
                }
            ]
        },
        {
            options: [
                {
                    amount: 200,
                    msg: "First payment for ARCS Summer Camp"
                },
                {
                    amount: 500,
                    msg: "Second payment for ARCS Summer Camp"
                }
            ]
        },
        {
            options: [
                {
                    amount: 400,
                    msg: "Discounted payment for second registered child in ARCS Summer Camp"
                }
            ]
        },
    ];
}

function setSelectedPayOption(button) {
    $("#"+button.id).addClass("active");
    if (SummerCampData.selectedPayOption != null) {
        $("#" + SummerCampData.selectedPayOption.id).removeClass("active");
    }
    SummerCampData.selectedPayOption = button;

    $("#pay-form1").css('visibility', 'hidden');
    $("#pay-form2").css('visibility', 'hidden');

    // id ~pay-opt#
    var optionNumber = button.id.substring(7);
    var optionCount = 1;
    for (var option of SummerCampData.paymentOptions[optionNumber - 1].options) {
        var formIdPrefix = "#pay-form" + optionCount;

        $(formIdPrefix + "-btn").val("$ " + option.amount + " (PayPal)");
        $(formIdPrefix + "-amount").val(option.amount);
        $(formIdPrefix + "-item-name").val(option.msg);
        $(formIdPrefix + "-custom").val(option.msg);
        $(formIdPrefix).css('visibility', 'visible');

        optionCount++;
    }

    $("#pay-form1-btn")
};
