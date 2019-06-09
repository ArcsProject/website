angular.module("arcsApp").controller("PieChartController",
function PieChartController($scope) {
    $scope.progressDataLoaded = false;
    $scope.progressMax = 15000;
    $scope.progressCurrent = 0;
    $scope.progressLeftPercentage = 629;
    $scope.goalPercentage = 0;
    $scope.newGoalMsg = "Thank you! Let's keep the story going!";
    
    $scope.initPieChartData = function () {
        $scope.GetDonationProgress($scope.targetDonation, function (result) {
            $scope.progressMax = result.Max;
            $scope.progressCurrent = result.Current;
            $scope.progressLeftPercentage = (100 - result.Percent) / 100 * 629;
            $scope.goalPercentage = result.Percent;
            $scope.progressDataLoaded = true;
            if ($scope.showNewGoalMsg && $scope.progressMax <= 15000) {
                $scope.showNewGoalMsg = false;
            }
            $scope.$apply();
        })
    }

    $scope.GetDonationProgress = function (target, onDataReceived) {
        var onError = function (err) {
            onDataReceived({
                Max: 15000,
                Current: 0,
                Percent: 0
            });
        }
        if (target == "film2018") {
            $scope.newGoalMsg = "Thank you! We have reached our first fundraising goal! Let's keep the story going!";
        }
        $.get({
            url: "api/donate/progress?target=" + target,
            success: function (result) {
                if (result == null || result.Max == null || result.Current == null || result.Percent == null || result.Max == 0) {
                    onError(null);
                } else {
                    onDataReceived(result);
                }
            },
            error: onError
        });
    }
});