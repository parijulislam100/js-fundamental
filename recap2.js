function getFeet(inch) {
    var feet = inch / 12;
    return feet;
}
inch = 500
inch2 = 700;
inch3 = 250;
inch4 = 750;
inch5 = 900;
inch6 = 1250;
inch7 = 300;
var feet = getFeet(inch);
var feet2 = getFeet(inch2);
var feet3 = getFeet(inch3)
var feet4 = getFeet(inch4)
var feet5 = getFeet(inch5)
var feet6 = getFeet(inch6)
var feet7 = getFeet(inch7)
console.log(feet);
console.log(feet2);

console.log(feet3);
console.log(feet4);
console.log(feet5);
console.log(feet6);
console.log(feet7);

function mileToKilo(miles) {
    var mile = miles / 1.603
    return mile
}
var miles = 17;
var miles2 = 20;
var miles3 = 50;
var countKilo = mileToKilo(miles);
var countKilo2 = mileToKilo(miles2);
var countKilo3 = mileToKilo(miles3)
console.log("kilometers is ", countKilo);
console.log("kilometers is ", countKilo2);
console.log("kilometers is ", countKilo3);

// simple interest
var p = 5000;
var r = 10;
var t = 1;
var simpleInterest = p * r * t / 100;
console.log(simpleInterest);

// celcius to farenhit
function getFarenhiet(celcius) {
    var farenhiet = celcius * 9 / 5 + 32;
    return farenhiet;
}
var farenhiet = getFarenhiet(30)
console.log("farenhiet is : ", farenhiet);

// var c = (f - 32)* 5/9;
function getCelcius(F){
var c = (F - 32) * 5 /9;
return c
}
var celcius = getCelcius(86);
console.log("celcius is :", celcius);

function getGrade(num){
    if(num >= 80 && num <= 100){
        console.log("grade is: ", "A+");
    }
    else if(num >= 70 && num <= 79){
        console.log("grade is :", "A");
    }
    else if(num >= 60 && num <= 69){
       return console.log("grade is :", "A-");
    }
    else if(num >= 50 && num <= 59){
        console.log("grade is :", "B");
    }
    else if(num >= 40 && num <= 49){
        console.log("grade is :", "C");
    }
    else if(num >= 33 && num <= 39){
        console.log("grade is :", "D");
    }
    else{
        console.log("grade is :", "F");
    }
    
}
getGrade(32);

var i = 1;
while (i <= 10){
    console.log(i);
    i++
}
for(var i = 1; i <= 10; i++){
    console.log(i)
}

for(var i = 1; i<= 10; i++){
    if(i == 6){
        continue
    }
    console.log(i);
}
for(var i = 1; i<= 10; i++){
    if(i == 6){
        break;
    }
    console.log(i);
}

function isEven(num){
    if( num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
num = 12;
var number = isEven(num);
console.log(number);

function isOdd(num){
    if(num % 2 != 0){
        console.log("this is odd number");
    }
    else{
        console.log("this is even number")
    }
}
isOdd(144646746467411);
var student1 = {
name :"pappu",
age :25,
study:"ba"
}
var student2 = {
name :"pappu",
age :25,
study:"ba",
hobby:["coding","watching"]
}
student2.hobby[1] = "programming"
var studentCollention = [student1,student2];

console.log(studentCollention);