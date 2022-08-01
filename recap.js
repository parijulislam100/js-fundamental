// factorial number 
// var factorNumber = 1;
// for(var i=1; i<=7; i++){
//     factorNumber = factorNumber * i;
// }

// factorial number with for loop in function 
function myfactorial(num){
    var factorialNumber = 1;
    for(var i = 1; i<=num; i++){
    factorialNumber = factorialNumber * i;

    }
    return factorialNumber;
}
var count = myfactorial(5);
console.log("first factorial number is ", count);

function myfactorial2(num2){

    var factorialNumber = 1;
    for(var i = 1; i <= num2; i++){
        factorialNumber = factorialNumber * i;
        // console.log(i ,factorialNumber)
    }
return factorialNumber
}
var number = 7;
const countNumber = myfactorial2(number);
console.log("second factorial number is ", countNumber);

// factorial number with for loop by decrement
function getFactorialNumber(number){
    let factorialNumber = 1;
    for(let i = 1; i <= number;  i++){
        // console.log(i);
        factorialNumber = factorialNumber * i;
    }
    return factorialNumber;
}

num = 9;
const countResult = getFactorialNumber(num);
console.log("third factorial number is", countResult);


function getFactorialNumber2(num){
    factorialNumber = 1;
    for(let i = num ; i >= 1; i--){
        factorialNumber = factorialNumber * i;
    }
    return factorialNumber;
}
let myNum = 5;
const countFact = getFactorialNumber2(myNum);
console.log("four factorial number ", countFact);

function getFactorial(number){
    let factor = 1;
    for(let i = number; i >= 1 ; i--){
        factor = factor * i;

    }
    return factor
}
let myNumber = 15;
const countFactorial = getFactorial(myNumber);
console.log("fifth factorial number is ", countFactorial);

function getFactorialNum(num){
    factorialNumb = 1;
    let i = 1;
    while(i <= num){
        factorialNumb =factorialNumb * i;
        i++
    }
    return factorialNumber
}
let myFact = 5;
const fact= getFactorialNum(myFact);
console.log("sixth number is ", fact)

//  factorial number with for loop by decrement

function getFactorial(num){
    let factorialNumber = 1;
    let i = num;
    while(i>=1){
        factorialNumber = factorialNumber * i;
        i--
    }
    return factorialNumber
}
const myFactor= getFactorial(7);
console.log("seventh number  is " , myFactor);

// inch to feet 

let mamaInch = 144;
let feet = mamaInch / 12;
console.log(feet);

let mamiInch = 288;
let  feet2 = mamiInch / 12;
console.log(feet2);

let nanaInch= 505;
let feet3 = nanaInch / 12;
console.log(feet3);

function getFeet(inch){
    let myFeet = inch / 12;
    return myFeet;
}
let inchies = 125;
const feetResult = getFeet( inchies);
console.log("your feet is ", feetResult);

// mile to kilometeres 
function mileToKilo(miles){
    let kilo = miles / 1.603;
    return kilo;
}
let myMiles = 7;
const kiloResult =   mileToKilo(myMiles);
console.log("total kilo is " ,kiloResult);

// leap Year  

function isLeapYear(years){
    if(years % 4== 0){
      return true
    }
    else{
      return false
    }
}

const leapYear = isLeapYear(2052);
// console.log(leapYear);
console.log("your leap year is" ,leapYear);

// even number 
function isEvenNumber(number){
    if(number % 2 == 0){
        return true
    }
    return false
}
let yourNum = 6
const result = isEvenNumber(yourNum);
console.log("the number is " , result);

function isOddNumber(userNumb){
    if(userNumb % 2 != 0){
        return true 
    }
    else{
        return false;
    }
}
let userNum = 5;
const oddResult = isOddNumber(userNum);
console.log("the odd number is", oddResult);

/*
var number = 70;
switch(number){
  case number >= 80:
    console.log("A+");
    break;
    case number <= 100:
        console.log("A+");
        break;
        case number >= 70:
            console.log("A");
            break;
            case number <=79 :
                console.log("A");
                break;
            case number >= 60:
                console.log("A-");
                break;
                case number <= 69:
                    console.log("A-");
                    break;
                case number >= 50:
                    console.log("B");
                    break;
                    case number <= 59:
                        console.log("B");
                        break;
                        case number >= 40:
                            console.log("c");
                            break;
                            case number <= 49:
                                console.log("C");
                                break;
                                default:
                                    console.log("F");

}
*/
var letter = "i";
switch(letter){
    case "a":
        console.log("vowel");
        break;
        case "e":
            console.log("vowel");
            break;
        case "i":
            console.log("vowel");
            break;
            default:
                console.log("consonant");
}

// object 
var studentId = {
    name :"pappu",
    age : 25,
    sex :"male",
    weight:68,
    study:"BA"
}
console.log(studentId.name);
console.log(studentId.age);
console.log(studentId.study);
studentId.weight = 78;
console.log(studentId);
studentId["age"] = 26;
console.log(studentId);

var num = [5,2,6,7,9];
for(var i = 0; i< num.length; i++){
    var songkha = num[i]
    console.log(songkha);
}

var num = [2,5,10,11,6];
for(var i = 0; i < num.length; i++){
    var x = num[i]
    if(x == 10){
        continue
    }
    console.log(x);
}

var num2 = [1,2,3,4,5,6];
for(var i =  0; i <=  num2.length; i++){
    var x = num2[i];
    if(x == 4){
        break;
    }
    console.log(x);
}

var market = ["fish","chiken","meet","potato"," cucumber","capsicum","onion"];
market.pop()
market.shift()
// market.shift();

// sumne theke add korte unshift use hoy 
market.unshift("rice","bringil","potol");
market[4] = "lemon";
console.log(market);
var total = market.length;
console.log("total :", total);
console.log(market);
 console.log(market[0])
var element = market.indexOf("capsicum");
console.log("capsicum index is :", element)
