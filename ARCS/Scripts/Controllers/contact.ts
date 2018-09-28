angular.module("arcsApp").component("contact", {
    templateUrl: GetUrlWithVersion("../../Views/contact.html"),
    controller: ContactController
});

function ContactController($scope) {
    $scope.TrackOutboundRequests = TrackOutboundRequests;
    var onSubmitError = function () {
        $scope.error = true;
        $scope.sent = false;
        $("#form-success-msg").hide();
        $("#form-error-msg").show();
        $("#submitInfoBtn").show();
        $("#sendingIcon").hide();
    }
    var onSubmitSuccess = function () {
        $scope.error = false;
        $scope.sent = true;
        $("#form-error-msg").hide();
        $("#form-success-msg").show();
        $("#submitInfoBtn").hide();
        $("#sendingIcon").hide();
    }

    $scope.submitInformation = function () {
        $("#submitInfoBtn").hide();
        $("#sendingIcon").show();
        $.post({
            url: "api/send/contact",
            data: { name: $("#name").val(), email: $("#email").val(), msg: $("#comment").val(), addToMailingList: $("#add-mailing-list").prop('checked')},
            success: function (result) {
                if (result.Success) {
                    onSubmitSuccess();
                }
                else {
                    onSubmitError();
                }
            },
            error: onSubmitError
        });
    }
};
