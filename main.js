function timerCounter(seconds) {
  var timerElement = document.getElementById("timer");
  var hoursElement = document.getElementById("hours");
  var minutesElement = document.getElementById("minutes");
  var secondsElement = document.getElementById("seconds");

  var intervalId = setInterval(function () {
    var hours = Math.floor(seconds / 3600);
    var mins = Math.floor((seconds % 3600) / 60);
    var secs = seconds % 60;

    var hoursFormat = hours.toString().padStart(2, "0");
    var minutesFormat = mins.toString().padStart(2, "0");
    var secondsFormat = secs.toString().padStart(2, "0");

    hoursElement.innerText = hoursFormat;
    minutesElement.innerText = minutesFormat;
    secondsElement.innerText = secondsFormat;

    if (seconds === 0) {
      clearInterval(intervalId);
      timerElement.innerText = "Time's up!";
    } else {
      seconds--;
    }
  }, 1000);
}

// Set the timer for 1 hour (3600 seconds)
timerCounter(3600);
