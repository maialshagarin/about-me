/*"use strict";
var username=prompt("what is your name?");
alert ("welcom"+ username);
var age= prompt ("are you 24 years old ?");
 age =age.toLowerCase();
if (age=== "yes" || age === "y"){
    alert ("it's my age" );
} else if (age==="no"){
    alert ( "maybe your older or younger than me");
}
var name = prompt ( " do you now that the meaning of mai is Naughty monkeys ?");
name =name.toLowerCase();
if ( name=== "yes" || name=== "y"){
    alert ( "it's my name")
}else if ( name==="no"){
    alert ( "new information to know and it's my name");
}
var food= prompt (" do you feel hungry when you concentrate ?");
food =food.toLowerCase();
if ( food=== "yes" || food=== "y"){
    alert("me too");
}else if ( food==="no"){
    alert ("you disagree with me");
}
var read= prompt (" do you like reading novel ?");
read =read.toLowerCase();
if ( read=== "yes" || read=== "y"){
    alert ("reading will make you better i'm sure ");
}else if ( read==="no"){
    alert ("i think you must start reading");
}
var game=prompt ("do you like puzzle game ");
game =game.toLowerCase();
if ( game=== "yes" || game=== "y"){
    alert("me too");
}else if ( game==="no"){
    alert ("try it, you will fell excited");
} /** */
"use Strict";
username = prompt("what is your name?");
alert("welcom" + username);
console.log("username" + username);
var count=0;
var questions = [
    [
        "are you 24 years old ?",
        "it's my age",
        "maybe your older or younger than me",
    ],
    [
        " do you now that the meaning of mai is Naughty monkeys ?",
        "it's my name",
        "new information to know and it's my name",
    ],
    [
        " do you feel hungry when you concentrate ?",
        "me too",
        "you disagree with me",
    ],
    [
        " do you like reading novel ?",
        "reading will make you better i'm sure ",
        "i think you must start reading",
    ],
    [
        "do you like puzzle game ",
        "me too",
        "try it, you will fell excited",
    ]
]
for (var i = 0; i < 5; i++) {
    var answer = questions[i];
    var promptQuestion = answer[0];
    var posetiveReply = answer[1];
    var negativeReply = answer[2];
    var username = prompt(promptQuestion);
    promptQuestion = promptQuestion.toLowerCase();

    switch (username){
        case 'yes':
        case  'y':
             alert(posetiveReply);
        var count= count+1
             break;
        case 'no':
        case 'n':
            alert(negativeReply);
            break;
    default :
    alert("incorret answer")
    }

 
}



for (var i = 0; i < 4; i++) {
    var number = prompt("guess-game : how many book did i read in the last two year?");
    if (number > 60) {
        alert("too high, please try again");

    } else if (number < 60) {
        alert("too low, please try again");

    } else {
        alert("that's correct");
        count=count+1
        break;
    }
}

if (i = 3) {
    alert("the correct answer = 60");
}

var anime = ["attack on titan", "violet", "death note", "boku dake ga lnai machi", "Hunter X Hunter", "Your Lie in April"]
for (i = 0; i < 6; i++) {
    var user = prompt("guess one of my top ten anime")
    if (user === anime[0] || user == anime[1] || user === anime[2] || user === anime[3] || user === anime[4] || user === anime[5]) {
        alert("correct answer");
        count=count+1
        break;
    } else {
        alert("you have to try a gain");
    }
}
alert("your correct answer="+count);