function sub(num1, num2) {
    var substution = num1 - num2;
    return substution

}
var firstNumber = 70;
var lastNumber = 50;
var result = sub(firstNumber, lastNumber);
console.log(result);

function sum(a, b) {
    var total = a + b;
    return total
}

num1 = 15;
num2 = 13;
var result = sum(num1, num2);
console.log(result);

function multiply(a, b) {
    result = a * b;
    return result
}
var first = 5;
var last = 3;
var myResult = multiply(first, last);
console.log(myResult);

var computer = {
    ram: 2,
    harddisk: 320,
    processor: "intel i5",
    price: 20000,
    version: 7
}
console.log(computer);
console.log(computer.processor);
console.log(computer.ram);
var computerPrice = computer.price;
console.log(computerPrice);
computer.price = 25000;
console.log(computer)
computer["version"] = 10;
console.log(computer)
computer["ram"] = 8
console.log(computer);

var Salman = {
    age: 50,
    height: 5,
    religion: "islam",
    wieght: 70,
    movie: "prem ratan dhan payo"
}
console.log(Salman);
console.log(Salman.movie);
console.log(Salman.religion)
Salman["height"] = 10
console.log(Salman)
Salman.wieght = 80
console.log(Salman);

var color = "pink";
if (color=="red"){
    console.log("color is red");
}
else if(color == "blue"){
    console.log("color is blue")
}
else if(color == "skyblue"){
    console.lgo("color is skyblue");
}
else if(color == "white"){
    console.log("color is white")
}
else if(color == "pink"){
    console.log("color is pink")
}
else if(color == "gray"){
    console.log("color is gray")
}
else if(color == "megenda"){
    console.log("color is megenda")
}
else{
    console.log("invalid color")
}
// switch

var textColor = "black"
switch(textColor){
    case "red":
        console.log("red");
        break
        case "megnda":
            console.log("megenda");
            break
            case "white":
                console.log("white");
                break
                case "black":
                    console.log("black");
                    break
                    case "pink":
                        console.log("pink");
                        break
                        default:
                            console.log("invalid");
}

var text = "four";
switch(text){
    case "one":
    console.log("one")
    break
    case "two":
        console.log("two");
        break
        case "three":
            console.log("three");
            break
            case "four":
                console.log("four")
                break
                case "five":
                    console.log("five");
                    break
                    default:
                        console.log("invalid number")

}

var i = 1;
while (i < 10){
    console.log(i);
    if(i == 5){
        break;
    }
    i++
}
// if...else
var chikenPrice = 100;
if (chikenPrice<150){
    console.log("buy chiken")
}
else{
    console.log("dont buy")
}

var number = [21,30,35,10,55,15,70];
for(var num = 0; num<number.length; num++){
    var numb = number[num];
    if(numb > 50){
        continue
    }
    console.log(numb);
}