const reverseString = function(string) {
    return string.split("").reverse().join("");
};

let originalString = ""
let reversedString = reverseString(originalString);

console.log(reversedString);

// Do not edit below this line
module.exports = reverseString;
