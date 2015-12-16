var statusContainer = document.getElementById("statusContainer");
var currentlyShowing = document.getElementById("currentlyShowing");

var statuses = [
  {
    status: "First status",
    date: new Date()
  },
  {
    status: "Second status",
    date: new Date(Date.now() - (24 * 60 * 60 * 1000))
  }
];

var currentlyShowingIndex = 0;

statusContainer.innerHTML = statuses[currentlyShowingIndex].status;
currentlyShowing.innerHTML = statuses[currentlyShowingIndex].date.toDateString();
