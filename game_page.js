player1_name = localStorage.getItem("player1name");
player2_name = localStorage.getItem("player2name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1_name;
document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2_name;

function send() {
  number1 = document.getElementById("number1").value;
  number2 = document.getElementById("number2").value;
  actual_answer = parseInt(number1) * parseInt(number2);

  question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
  input_box = "<br>Answer:<input type='text' id='input_check_box'>";
  check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
  row = question_number + input_box + check_button;
  document.getElementById("output").innerHTML = row;
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
}

questionTurn = "player1";
answerTurn = "player2";

function check() {
  getAnswer = document.getElementById("input_check_box").value;
  if (getAnswer == actual_answer) {
    if (answerTurn == "player1") {
      player1_score = player1_score + 1;
      document.getElementById("player1_score").inHTML = player1_score;
    } else {
      player2_score = player2_score + 1;
      document.getElementById("player2_score").innerHTML = player2_score;
    }
  }

  if (questionTurn == "player1") {
    questionTurn = "player2";
    document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player2_name;
  } else {
    questionTurn = "player1";
    document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1_name;
  }
  if (answerTurn == "player1") {
    answerTurn = "player2";
    document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2_name;
  } else {
    answerTurn = "player1";
    document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player1_name;
  }
  document.getElementById("output").innerHTML="";
}
