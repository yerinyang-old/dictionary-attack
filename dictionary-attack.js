var wordsList = [];

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
// "result" is the id for the after input //
function checkPassword() {
  var userInput = document.getElementById("pw").value;
  var check = false;
  for (var i = 0; i < wordsList.length; i++) { 
    if (userInput == wordsList[i]) {
      document.getElementById("result").innerHTML = "This password is too weak!!!";
      check = true;
      break;
    } 
  }
  if (test = false) {
    document.getElementById("result").innerHTML = "Strong password!!!";
  }
}
      
    
