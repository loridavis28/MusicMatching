var soundFiles = ["Beethoven9", "DebussyClair", "AlbinoniAdagio"];
var buttonAssignment = [0, 0, 1, 1, 2, 2];
var audio = new Audio("");
var currentSeries = [];


shuffleAssignment();
//$("h1").addClass("matchFound");

//Listen for clicks and play the sound.
$(".btn").click(function() {
  var userChosenButton = $(this).attr("id");
  playSound(userChosenButton);
  if (currentSeries.length == 0) {
    currentSeries[0] = buttonAssignment[(userChosenButton - 1)];
  } else if (currentSeries.length == 1) {
    currentSeries[1] = buttonAssignment[(userChosenButton - 1)];
  } else if (currentSeries.length == 2) {
    currentSeries = [];
    currentSeries[0] = buttonAssignment[(userChosenButton - 1)];
  }
  if (currentSeries.length == 2) {
    checkAnswer();
  }
  alert(currentSeries);
})

//Set the randomization.
function shuffleAssignment() {
  var randomNumber;
  var temp;
  var i = buttonAssignment.length;

  while (i--) {
    randomNumber = Math.floor(Math.random() * 3);
    temp = buttonAssignment[randomNumber];
    buttonAssignment[randomNumber] = buttonAssignment[i];
    buttonAssignment[i] = temp;
  }
}


//Play the music.
function playSound(name) {
  var soundFileNumber = buttonAssignment[(name - 1)];
  var soundFileName = soundFiles[soundFileNumber];
  var audioFile = "Sounds/" + soundFileName + "Clip.mp3";
  audio.src = audioFile;
  audio.play();
}


//Check the answer.
function checkAnswer() {
  if (currentSeries[0] == currentSeries[1]) {
    alert("You found a match!");
  }
}
