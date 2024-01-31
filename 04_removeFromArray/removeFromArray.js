// const removeFromArray = function(array, numToRemove) {
//     let index = array.indexOf(numToRemove)
//     if (index !== -1) {
//         array.splice(index, 2);
//     }
//     return array;
// };

// let numbers = [1, 2, 3, 4];
// let numberToRemove = 2;

// let updatedNumbers = removeFromArray(numbers, numberToRemove);

const removeFromArray = ((array, ...args) => {
    const newArray = [];

    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        };
    });
    return newArray;
});

let numbers = [1, 2, 3, 4];
console.log(removeFromArray(numbers));

//console.log(updatedNumbers);

// Do not edit below this line
module.exports = removeFromArray;
