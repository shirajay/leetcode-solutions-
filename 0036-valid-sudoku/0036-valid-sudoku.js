var isValidSudoku = function(board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {

            const num = board[r][c];

            // Empty cell
            if (num === ".") {
                continue;
            }

            // Find 3x3 box number
            const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            // Check duplicate
            if (
                rows[r].has(num) ||
                cols[c].has(num) ||
                boxes[boxIndex].has(num)
            ) {
                return false;
            }

            // Store number
            rows[r].add(num);
            cols[c].add(num);
            boxes[boxIndex].add(num);
        }
    }

    return true;
};