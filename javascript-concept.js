function inchToFeet(inches){
    var feet = inches/12;
    return feet
}

var myInch = 14;
var result = inchToFeet(myInch);
console.log(result);

var dadiInch = 144;
var feet = inchToFeet(dadiInch)
console.log(feet);

var dadaInch = 188;
var feet = inchToFeet(dadaInch)
console.log(feet) ;

var nanaInch = 288;
var feet = inchToFeet(nanaInch)
console.log(feet);

// mile to  kilometers
function mileToKilometers(miles){
    var km = miles *1.603;
    return km
}
var kilo = mileToKilometers(10);
console.log("kilometers :",kilo);

// even number check

function isEven(num){
    if(num % 2== 0){
        return true
    }
    return false
}
var numb = 121;
var result =isEven(numb);
console.log("number is ", result);

// odd number check 
function isOdd(num){
    if(num % 2 != 0){
        return true
    }
    return false
}

const number = isOdd(123121);
console.log("the number is ", number);

console.log(`jor number print korar program`)

num = 1;
while(num < 9){
    num = num + 1;
    console.log(num);
    num++
}
num = 1;
