// leap year check 

function isLeapYear(year){
    if(year % 4 == 0){
        return true
    }
    else{
        return false
    }
}
myLeapYear = 2050
var leapYear = isLeapYear(myLeapYear);
console.log(leapYear);
const yourLeapYour = 2048;
const LeapYear = isLeapYear(yourLeapYour)
console.log("your leap year is" , LeapYear)