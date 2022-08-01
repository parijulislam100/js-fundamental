var letter = "one";
switch(letter){
    case  "one":
        console.log(letter)
        break
    case "two":
        console.log(letter)
        break
    case "three":
        console.log(letter)
       
    default:
        console.log("invalid");
        
}

var isRoseColor = "red";
switch(isRoseColor){
    case "black":
        console.log("i will not");
        break;
    case "gray":
        console.log(" i dont like");
        break;
    case "red":
        console.log("i will propose");
        break;
    default:
        console.log("invalid");

}
var gf= ["ritu","lima","borsha"]
for(var i = 0; i<gf.length; i++){
    var Girl = gf[i];
    console.log(Girl);
}
gf.unshift("israt");
gf.unshift("mariya");
gf.unshift("annaya");
gf.shift();
gf.shift();
gf.shift();
gf.pop()
gf.push("borsha");
gf.push("keya")
console.log(gf.length);
var x= gf.indexOf("keya");
var y = gf[3];
console.log(y)
console.log(x)
console.log(gf);

var number =3.1416;
var num = Math.ceil(number);
var num2 = Math.floor(number);
console.log(num);
console.log(num2);

var num = 2.2526;
var  result = parseInt(num);
console.log(result);

var numb = 5.3256;
var result2  = parseInt(numb);
console.log(result2);

var x =  5;
console.log(x.toString(x))

console.log(typeof "80")
console.log(typeof 80)
console.log(typeof false);

var factorialNum = 1
function factorial(num){
    for(var i = 1; i <= num; i++){
        factorialNum = factorialNum * i;
    }
    return  factorialNum;
}
var factor = factorial(7);
console.log(`factorial number is :`, factor);