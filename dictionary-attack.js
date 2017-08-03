var wordsList = [];
var userInput = document.getElementById("pw").value;

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
}

window.onload = init;

/* ADD YOUR CODE BELOW */
// check password against dictionary //
// if password matches dictionary, then print to user that the password is too weak - "This password is too weak! Don't use a word from the dictionary" //
// if password is close to a word in the dictionary, then print to user that the password is too similar to a word in the dictionary = "This password is too weak! It's too similar to a word from the dictionary." //
// "pw" is the id for user input //
// "results" is the id for the after input //
function checkPassword() {
  for (var i = 0; i < wordList.length; i++) { 
    if (userInput = wordsList[i]) {      
      var str = document.getElementById("results").innerHTML;
      var res = str.replace("Is your password strong enough?", "No.");
      document.getElementById("results").innerHTML = res;
    }
    else {
      var str = document.getElementById("results").innerHTML;
      var res = str.replace("Is your password strong enough?", "Yes!");
      document.getElementById("results").innerHTML = res;
    }
  }
}
