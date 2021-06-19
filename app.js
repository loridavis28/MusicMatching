var soundFiles = ["Beethoven9", "DebussyClair", "AlbinoniAdagio", "BachToccata", "Dvorak9", "Mozart40", "OrffCarmina", "WagnerValkyrie"];
var buttonAssignment = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
var audio = new Audio("");
var currentSeries = [];
var lastButton;
var totalFound = 0;


shuffleAssignment();

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
  animatePress(this, currentSeries.length);
  if (currentSeries.length == 2) {
    checkAnswer(userChosenButton);
  }
})

//Highlight selected button. Leave it on for the second press. Remove all highlight after second press.
function animatePress(currentButton, firstOrSecond) {
  $(currentButton).addClass("pressed");
  if (firstOrSecond == 2) {
    setTimeout(function() {
      $("button").removeClass("pressed");
    }, 1000);
  }
}

//Set the randomization.
function shuffleAssignment() {
  var randomNumber;
  var temp;
  var i = buttonAssignment.length;

  while (i--) {
    randomNumber = Math.floor(Math.random() * 8);
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


//Check the answer. Remove from options if correct.
function checkAnswer(selectedButton) {
  var status = false;
  if (currentSeries[0] == currentSeries[1]) {
    totalFound++;
    setTimeout(function() {
      var idSelectedButton;
      for (var i = 0; i < 16; i++) {
        if (buttonAssignment[i] == currentSeries[0]) {
          idSelectedButton = "#" + (i + 1);
          $(idSelectedButton).addClass("matchFound");
          if (currentSeries[0] == 0) {
            $(".clip1").removeClass("matchList");
          } else if (currentSeries[0] == 1) {
            $(".clip2").removeClass("matchList");
          } else if (currentSeries[0] == 2) {
            $(".clip3").removeClass("matchList");
          }
        }
      }
    }, 1000);
    checkIfDone();
  }
}

//Shows the play again button if all matches have been found.
function checkIfDone() {
  console.log(totalFound);
  if (totalFound == 8) {
    $(".reload").removeClass("matchList");
  }
}


//Reload page to play again
$(".reload").click(function() {
  location.reload();
})
