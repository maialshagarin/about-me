
"use Strict";
username = prompt("what is your name?");
alert("welcom" + username);
console.log("username" + username);
var count=0;

function userinput1 ( question, yes , no ) {
var response = prompt (question);
response = response.toLowerCase();

if (response == 'yes' || response =='y'){
    alert(yes);
    count = count +1;

} else if (response == 'no' || response == 'n'){
alert(no);    
}
 else 
    alert ("incorrect answer")
}

userinput1('are you 24 years old ?', "it's my age", "maybe your older or younger than me");
userinput1(" do you now that the meaning of mai is Naughty monkeys ?", "it's my name", "new information to know and it's my name");
userinput1(   " do you feel hungry when you concentrate ?", "me too","you disagree with me");
userinput1(  " do you like reading novel ?", "reading will make you better i'm sure ", "i think you must start reading");
userinput1("do you like puzzle game ","me too", "try it, you will fell excited");


function book () {

    for (var i = 0; i < 4; i++) {
        var number = prompt("guess-game : how many book did i read in the last two year?");
        if (number > 60) {
        alert("too high, please try again");
        
    } else if (number < 60) {
        alert("too low, please try again");
        
    } else if (number == 60){
        alert("that's correct");
        count=count+1
        break;
    } 
    if (i==3){
     alert("the correct answer = 60");
}
}
return(number);
}
book ();



function cartoon () {
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
alert('your correct answer= '+ count);

 return (anime);   
}
cartoon();