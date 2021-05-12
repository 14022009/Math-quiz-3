var player1_name = localStorage.getItem("name1");
var player2_name = localStorage.getItem("name2");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : " + player1_score;
document.getElementById("player2_name").innerHTML = player2_name + " : " + player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var actual_answer = parseInt(number1) * parseInt(number2);
    console.log(actual_answer);
    document.getElementById("output").style.height = "400px";

    var question_number = "<h2 class='hq'>" + number1 + " x " + number2 + "</h2>";
    input_box = "<br>Answer : <input type='number' class='a_t' id='input_check_box'>";
    check_button = "<br><br><button class='btn_sd btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
question_turn = "player1";
answer_turn = "player2";

function check() {

}