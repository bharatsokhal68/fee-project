function generate() {
  let sleep = parseFloat(document.getElementById("sleep").value);
  let workStart = document.getElementById("workStart").value;
  let workEnd = document.getElementById("workEnd").value;

  let output = "";

  output += "<h3>Your Schedule</h3>";
  output += "Wake up: 7 AM <br>";
  output += "Work: " + workStart + " to " + workEnd + "<br>";
  output += "Exercise: 5 PM <br>";
  output += "Hobby: 7 PM <br>";

  if (sleep > 1) {
    let newSleep = sleep - 0.25;``
    output += "<br>⚠ Suggestion: Sleep at " + newSleep.toFixed(2) + " AM";
  } else {
    output += "<br>✅ Good sleep schedule!";
  }

  output += "<br><br>";

  let missed = confirm("Did you miss any task today?");

  if (missed) {
    output += "🔁 Task rescheduled to evening";
  } else {
    output += "🔥 Great job staying on track!";
  }

  document.getElementById("output").innerHTML = output;
}