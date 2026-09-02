var lengthOfLastWord = function(s) {
    let i = s.length - 1;

    // Skip trailing spaces
    while (i >= 0 && s[i] === ' ') {
        i--;
    }

    // Count last word
    let count = 0;

    while (i >= 0 && s[i] !== ' ') {
        count++;
        i--;
    }

    return count;
};