// switch
var letter = "i";
switch (letter) {
    case "a":
        console.log("vowel");
        break;
    case "e":
        console.log("vowel");
        break;
    case "i":
        console.log("vowel");
        break;
    case "o":
        console.log("vowel");
        break;
    case "u":
        console.log("vowel");
        break;
    default:
        console.log("consonant")
}

// object 
var pappu = {
    age: 25,
    weight: 68,
    study: "degree",
    hobbie: "programming",
    dream: "software engineer"
}
console.log(pappu);
console.log(pappu.study);
console.log(pappu.age);
console.log(pappu.dream);
pappu["weight"] = 78;
console.log(pappu);
pappu.age = 26;
console.log(pappu);

// fuction
function sum(num1, num2) {
    if (num1 > num2) {
        return num1
    }
    else {
        return num2
    }
}

var result = sum(35, 45);
console.log(result);

// break

for (var x = 1; x <= 10; x++) {
    if (x % 2 == 0) {
        console.log(x);
    }
    if (x == 6) {
        break;
    }
}

// continue
var number = [5, 4, 3, 10, 7, 12, 2];
for (var i = 0; i < number.length; i++) {
    var num = number[i];
    if (num == 10) {
        continue
    }
    console.log(num);
}

// function 
// function isMoonUp(time){
//     if(time>19) && (time<5){
//         return true
//     }
//     return false
// }
// var moonStatus = isMoonUp(21);
// console.log(moonStatus);

var marketList = ["chiken", "meet", "beef", "vegetable", "potato", "cucumber"];
for (var i = 0; i < marketList.length; i++) {
    var market = marketList[i];
    if (market == "vegetable") {
        continue
    }
    console.log(market);

}
var num = 1;
while(num < 10){
    if(num == 5){
       break
   }
    console.log(num);
    num++
}
function isDeepNight (time){
    if(time > 21 && time <24){
        return true
    }
    return false
}
var result = isDeepNight(23);
console.log(result);

