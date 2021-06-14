var soundFiles = ["Beethoven9", "DebussyClair", "AlbinoniAdagio"];
var buttonAssignment = [0, 0, 1, 1, 2, 2];
var audio = new Audio("");

shuffleAssignment();


//Listen for clicks and play the sound.
$(".btn").click(function() {
  var userChosenButton = $(this).attr("id");
  playSound(userChosenButton);
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
