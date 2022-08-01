// var roastGiven = 0;
// while (roastGiven < 7){
//     console.log("amare roast den please");
//     roastGiven++
//     console.log(roastGiven)
// }

var number = 0;
while( number < 10){
    console.log(number);
    number++
}

var books = ["bangla","english","math" ];
books.push("social-science");
books.push("religion")
books.push("science")
books.unshift("ict")
books.shift()
books.shift()
books.pop()

console.log(books);
function add(a,b){
    console.log(a +b)
}
add(10,20);

var firstName = 'pappu';
var lastName = '  bokshi'
var total = firstName + lastName;
console.log(total);

firstName = 'ELON'
lastName = 'musk'
console.log(firstName +' '+ lastName)

var first = "angelina"
var last = " jolie";
console.log(first + " " + last)

var num = 100;
if( num >= 80 && num <= 100 ){
    console.log("A+")
}
else if(num>= 70 && num<=79){
    console.log("A")
}
else if( num >= 60 && num <= 69){
    console.log("A-")
}
else if( num >= 50 && num <= 59){
    console.log("B")
}
else if( num >= 40 && num <= 49){
    console.log("C")
}
else{
    console.log( "F");
}

console.log(`vowel check`)
var letter = "a";
if(letter == "a" || letter == "e" || letter == "i"  || letter == "o" || letter == "u"){
        console.log("this is vowel")
}
else{
    console.log("this is consonant");
}

var num1 = 11;
var num2 = 9;
if(num1 > num2){
    console.log("largest number is :" + " " + num1)
}else{
    console.log("largest number is :" +" " +num2)
}

num1 = 13;
num2 = 4
if(num1 < num2){
    console.log("smallest number is :"+ " " + num1)
}
else{
    console.log("smallest number is :" + " " + num2)
}
var market = ["vegetables", "fish", " meet", " peddy", "oil", "salt", "onion"];
console.log(market[5]);
console.log(market.indexOf("oil"));
console.log(market.indexOf("fish"));
console.log(market.indexOf("onion"))
console.log(market.indexOf("vegetables"))
console.log(market.indexOf("fish"));
market[3] = " miniket"
console.log(market);
market.reverse()
console.log(market);

console.log( 5 >6);
console.log(5<6);
console.log(5==6);
console.log(6==6);
console.log(6 != 6);
console.log(6 != 6);
console.log(6 < 7);
console.log(7 == 7);
console.log(4 == 3);
console.log(5 != 6);

var num = 1;
while (num<10){
    console.log(num);
    num++
}
num = 0 ;
while (num <= 20){
    console.log(num);
    num = num + 2
}

num = 1;
while(num <= 20){
    console.log(num);
    num = num  + 2
}

var girlFriend = ["ritu", "lima", "borsha"];
for (var i=0; i< girlFriend.length; i++){
        var gf= girlFriend[i]
        console.log(gf)
}

var fish = ["hilsha","rui"];
for(var i = 0;i <fish.length; i++){
    var animal = fish[i];
    console.log(animal);
}
var vorta = ["alu","begun"];
var num = 0;
while (num<vorta.length){
    var food = vorta[num];
    console.log(food);
}

num = 2
while (num<100){
    console.log(num);
    num = num +2
}
function bringSingara(taka){
    console.log(taka);
}
bringSingara(200)