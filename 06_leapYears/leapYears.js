const leapYears = function(year) {

    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
        } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        }

const nonCent = 1996;
const nonCentFalse = 1997;
const nonCentFuture = 34992;
const centYears = 1900;
const centYears1600 = 1600;
const centYears700 = 700;

console.log(leapYears(centYears700));

    // if (year < 400) {
    // } else {
    //     return false;
    //     }
    // } else if (year > 400) {
        // if (Number.isInteger(year / 4 && year % 100 !== 0 && year / 400)) {
        //     return true;

/*
divides by 4
and is a whole number (not decimal)

& does not divide by 100
and is a whole number (not decimal)
unless
they are also divisible by 400
---
if divible by 4 and not divisble by 400
else
if divisble 400 and disible by 100
else
fail
*/


// Do not edit below this line
module.exports = leapYears;
