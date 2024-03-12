const palindromes = function (string) {
    let removeChar = string.replace("!", "").toLowerCase();
    let removeComma = removeChar.replaceAll(",", "");
    let removeSpace = removeComma.replaceAll(" ", "");
    let removePeriod = removeSpace.replaceAll(".", "");
    let array = removePeriod.split('');

    //need to find an elegant way to remove multiple characters?

    let reversed = array.reverse('');
    let rString = reversed.join('');

    if (removePeriod === rString) {
        return true;
    } else {
        return false;
    }
};

console.log(palindromes("A car, a man, a maraca."))
// x = string
// y = stribng reversed
// if x = y retrun true
// split > reverse > join

// Do not edit below this line
module.exports = palindromes;
