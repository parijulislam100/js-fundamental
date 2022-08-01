// 7! = 7*6*5*4*3*2*1
var factorial = 1;
for (var i = 1; i <= 7;i++){
    // console.log(i);
   
    factorial = factorial * i;
}
// to get a factorial number using for loop
function getFactorial(number){
    
    let factorial = 1;
    for(let i = 1;i <= number; i++){
        // console.log(i)
        factorial = factorial * i
        // console.log(i,factorial)
    }
    return factorial
}
const factNumber = getFactorial(11);
console.log(factNumber)


// to get a factorial number using reverse for loop
function getFactorial2(number2){
    let factorial2 = 1;
    for(let i = number2; i >= 1; i--){
        factorial2 = factorial2 * i;
    }
    return factorial2
}
const myFact = getFactorial2(9);
console.log(myFact);

// while loop using factorial number 
function getFact(number){
    let factNumb = 1;
    let i = 1;
    while (i <= number){
        factNumb = factNumb * i;
        i++;
    }
    return factNumb
}
const myFactorial = getFact(7);
console.log(myFactorial);

// while looop decretion in another system
function getFact(number){
    let factNumb = 1;
    let i = number;
    while (i >= 1){
        factNumb = factNumb * i;
        i--;
    }
    return factNumb
}
const myFactor = getFact(7);
console.log("my factorial is", myFactor);

