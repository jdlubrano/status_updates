var statusContainerCurrent = document.getElementById("statusContainerCurrent");
var statusContainerPrev = document.getElementById("statusContainerPrev");
var statusContainerNext = document.getElementById("statusContainerNext");
var currentlyShowing = document.getElementById("currentlyShowing");

var statuses = [
  {
    status: "First status",
    date: new Date(Date.now() - (24 * 60 * 60 * 1000))
  },
  {
    status: "Second status",
    date: new Date()
  }
];

var currentlyShowingIndex = 1;

var currentStatus = function() {
  return statuses[currentlyShowingIndex];
}

var prevStatus = function() {
  return currentlyShowingIndex <= 0 ? null : statuses[currentlyShowingIndex - 1];
};

var nextStatus = function() {
  return currentlyShowingIndex >= (statuses.length - 1) ? null : statuses[currentlyShowingIndex + 1];
}

var updateStatus = function() {
  statusContainerPrev.innerHTML = prevStatus() ? prevStatus().status : "";

  statusContainerCurrent.innerHTML = currentStatus().status;
  currentlyShowing.innerHTML = currentStatus().date.toDateString();

  statusContainerNext.innerHTML = nextStatus() ? nextStatus().status : "";
};

var prev = function() {
  if(prevStatus() === null) {
    console.error("NO MORE PREVIOUS");
    return;
  }
  currentlyShowingIndex--;
  updateStatus();
};

var next = function() {
  if(nextStatus() === null) {
    console.error("NO MORE NEXT");
    return;
  }
  currentlyShowingIndex++;
  updateStatus();
};

updateStatus();
