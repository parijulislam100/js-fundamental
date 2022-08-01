let budget = 8000;
if(budget>5000){
    console.log("tour dibo");
    let hotelVara = 4000;
    let remaining = budget - hotelVara;
    console.log(remaining);
    if(remaining>2000){
        console.log("berbique parti dibo");
    }
    else{
        console.log("olpo solpo shopping korbo");
    }
}
else{
    console.log("barite ghumiye porbo");
}

//  home work 2 form conceptual-session;
let age = 17;
let vaccineCount = 2;
let isVaccinated = false;
if(age >20 && vaccineCount == 2){
    console.log("you may go foreign");
}
if(age >15 && age< 20 && vaccineCount == 0){
    console.log("tomorrow is your first vaccine")
}
console.log(`before status `, isVaccinated)
if(age >15 && age  < 20 && vaccineCount == 2){
    isVaccinated = true;
    console.log("congratulations.");
}
console.log(`after status`, isVaccinated);

function isOdd(num){
    if(num % 2 != 0){
        return true
    }
    return false
}
var number =isOdd(1247976163);
console.log("number is ", number);

function  isEven(num){
    if(num % 2 == 0){
        return true
    }
    return false
}
var number = isEven(13);
console.log(`number is `, number);

function letterGrade(num){
    if(num >= 80 && num <= 100){
        console.log(`letter grade :`, " A+");
    }
    else if( num >= 70 && num <= 79){
        console.log(`letter grade :`, " A");
    }
    else if(num  >= 60 && num <= 69){
        console.log(`letter grade :`, " A-");
    }
    else{
        console.log(`letter  grade :`, " FAIL");
    }
}
var num = 70;
letterGrade(num);

function  getCelcius(F){
    var c = (F - 32)* 5 / 9;
    return c;
}
F  = 98;
c = getCelcius(F);
console.log(`celcius is: `, c);

function getCelcius2(F){
    var c = (F - 32) * 5 /9;
    return c
}
F = 108
c= getCelcius2(F)
console.log(` CELCIUS IS` ,c);

function getFarenhiet(c){
    F = c * 9/ 5 + 32;
    return F
}
c = 40;
var f = getFarenhiet(c);
console.log(`farenhiet is: `,f);

var p = 10000;
var t = 2;
var r = 12;
var interest = p*t*r / 100;
console.log(`your interest is :` , interest);

function getKilo(miles){
    var km =  miles * 1.603
    return km
}
mile = 100;
var kilo= getKilo(mile);
console.log( `kilo is` , kilo);

function getFeet(inchies){
    var feet = inchies / 12;
    return feet
}
var inch = 100
var feet = getCelcius(inch);
console.log(`feet is: `,  feet);

var isRoseColor = "red";
switch(isRoseColor){
    case isRoseColor == "white":
        console.log("propose korbona");
        break;
        case isRoseColor == "pink":
            console.log( "i dont buy");
            break;
            case isRoseColor == "red":
                console.log("i will propose my gf");
                break;
                default:
                    console.log("i loose my gf");
                    break;

}