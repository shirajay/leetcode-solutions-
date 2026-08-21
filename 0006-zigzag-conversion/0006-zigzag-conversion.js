var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    let rows = new Array(numRows).fill("");
    let currentRow = 0;
    let direction = 1;

    for (let char of s) {
        rows[currentRow] += char;

        if (currentRow === 0) {
            direction = 1;
        } else if (currentRow === numRows - 1) {
            direction = -1;
        }

        currentRow += direction;
    }

    return rows.join("");
};