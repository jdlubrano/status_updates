angular.module('statusApp', []).controller('StatusCtrl', function($scope) {
  var sortByDate = function(a, b) {
    return a.date - b.date;
  };

  var statuses = [
    {
      status: "First status",
      date: new Date(Date.now() - (24 * 60 * 60 * 1000))
    },
    {
      status: "Second status",
      date: new Date()
    }
  ].sort(sortByDate);

  var currentStatusIndex = statuses.length - 1;

  var hasNextStatus = function() {
    return currentStatusIndex < (statuses.length - 1);
  };

  var hasPreviousStatus = function() {
    return currentStatusIndex > 0;
  };

  $scope.currentStatus = function() {
    return currentStatusIndex >= 0 && currentStatusIndex < statuses.length ?
      statuses[currentStatusIndex] : {};
  };

  $scope.nextStatus = function() {
    return  hasNextStatus() ? {} : statuses[currentStatusIndex + 1];
  };

  $scope.previousStatus = function() {
    return hasPreviousStatus() ? {} : statuses[currentStatusIndex - 1];
  };

  $scope.next = function() {
    if(!hasNextStatus()) {
      console.error("NO MORE NEXT");
      return;
    }
    currentStatusIndex++;
  };

  $scope.prev = function() {
    if(!hasPreviousStatus()) {
      console.error("NO MORE PREVIOUS");
      return;
    }
    currentStatusIndex--;
  };

});
