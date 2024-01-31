const repeatString = function (word, times) {
    if (times < 0) return "ERROR";
    let string = "";
    for (let i = 0; i < times; i++) {
        string += word;
    }
    return string;
};

console.log(repeatString, ("hey", 3));
console.log(repeatString, ("hey", 10));
console.log(repeatString, ("hey", 1));
console.log(repeatString, ("hey", 0));
console.log(repeatString, ("hey", -1));
console.log(repeatString, ("hey", (Math.random() * 100)));
console.log(repeatString, ("", 1));

// Do not edit below this line
module.exports = repeatString;
