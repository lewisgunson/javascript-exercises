const sumAll = function(start, end) {
    let sum = 0;
    // const min = Math.min(start, end);
    // const max = Math.max(start, end);
    
    if (start < end) {
    //     start = Math.min(start, end);
    //     end = Math.max(start, end);
    // } else {
    //     start = Math.max(start, end);
    //     end = Math.min(start, end);
    // }

    for (let i = start; i <= end; i++) {
        sum += i;
    }
} else {
    for (let i = end; i <= start; i++) {
        sum += i;
}
}
    // for (let i = min; i <= max; i++) {
    //     sum += 1;
    // }

    if (typeof start === 'number' && typeof end === 'number' && sum > 0) {
        return sum;
    } else {
        return 'ERROR';
    }
};

let defaultResults = sumAll();
let numWithinRange = sumAll(1,4);
let largeNum = sumAll(1,4000);
let largeNumFirst = sumAll(123, 1);
let negativeNumers = sumAll(-10, 4);
let nonNum = sumAll(10, "90");
let moreNonNums = sumAll(sumAll(10, [90, 1]));

console.log(moreNonNums);

// Do not edit below this line
module.exports = sumAll;
