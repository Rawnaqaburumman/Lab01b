'use strict'

let correct = 0;
let wrong = 0;


let nam = prompt('Hello dear.Please enter your beautiful name here :')
//nam.toString();
alert('We are glad to have you here' + ' ' + nam);
alert('Before taking the short quize please read the paragraph in the page');
let age = (prompt(' How old am I, Do you think its less than 26?'));
age = age.toUpperCase();
if (age == 'YES') {
    //console.log("yes true ")
    alert("yes true ");

    correct = correct + 1;
}
else {
    //console.log( "No,my age is 24 ");
    alert("No,my age is 24 ");

    wrong = wrong + 1;
}

// Second Q--------------------------------------------------------------------------------------------------------------------------------------
let ans = (prompt('Is my undergraduate major is Engineering ?'));
ans = ans.toUpperCase();
if (ans === 'YES') {
    //consol.log("yes it\'s Engineering");
    alert("yes it'\s Engineering ");

    correct = correct + 1;
}
else {
    //console.log("No it\'s Engineering ");
    alert("No it'\s Engineering ");

    wrong = wrong + 1;
}
// 3 rd Q ------------------------------------------------------------------------------------------------------------------------------------
let answer = (confirm('Do i like programming? , yes:press (ok), no:press (cancel) ?'));

switch (answer) {
    case true:
        //console.log("Of course all of us like programming");
        alert('Of course all of us like programming');
        correct = correct + 1;

        break;
    case false:
        console.log("of course no.I like it *-*");
        alert('of course no.I like it *-*');

        wrong = wrong + 1;
        break;
}
// 4th Q-------------------------------------------------------------------------------------------------------------------------------------------
let ans1 = (prompt(' Do I live in jordan ?'))
switch (ans1.toLowerCase()) {
    case 'yes':
        alert('Jordan is very wonderfull country ');

        correct = correct + 1;
        break;
    case 'no':
        alert("I live in jordan. In a capital Amman");

        wrong = wrong + 1;
        break;
}
//5th Q-------------------------------------------------------------------------------------------------------------------------------------
let ans2 = (prompt('Do you think that i like blue color?, hint: look to my web page color *_*'))
if (ans2.toUpperCase() == 'YES') {
    alert("yes,True answer the blue is a sky color it\'s a wide color");

    correct = correct + 1;
}
else {
    alert('Blue is my favourite color ');

    wrong = wrong + 1;
}

//6 th question-------------------------------------------------------------------------------------------------------
for (let i = 0; i !== 4; i++) {
    var number = (prompt('Guess a random number between one to ten , you just have four iterations '));
    if (number == 4) {
        alert('congratulations! ');
        correct = correct + 1;
        break;
    }

    switch (number) {

        case '1':
        case '2':
        case '3':
        case '5':
            alert('its too low ');
            break;
        case '6':
        case '7':
        case '8':
        case '9':
        case '10':
            alert('its too high ');
            break;

    }

}

if (number !== 4) {
    wrong = wrong + 1;
    alert('The correct number is 4')
}
//the 7 th qustion-----------------------------------------------------------------------------------------------------------------------

let foods = ['Dawali', 'Mansaf', 'kabsa', 'basta', 'soups', 'ice creem', 'hummos', 'pizza'];
for (let i = 0; i < 7; i++) {
    var fans = (prompt('What do you think it\'s my favorite food from this list ' + foods));
    if (fans !== 'Dawali') {
        let yy = 7;
    }
    else {
        alert('yes true answer is Dawali')
        correct = correct + 1;
        break;
    }
    if (i == 7) { wrong = wrong + 1; }
}


alert(nam + '  please see your result at the bottom of the page');
document.write("<br>");
document.write('Thanks for your time ' + nam)
document.write("<br>");
document.write("<span style=\"color:red;font-size:1em; font-family:arial, helvetica, sans-serif;\"> Your result is: <\/span>");
document.write("<br>");
document.write('Number of true answer= ' + correct);
document.write("<br>");
document.write('Number of wrong answer= ' + wrong);
