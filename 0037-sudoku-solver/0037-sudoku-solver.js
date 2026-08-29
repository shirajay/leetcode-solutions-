var solveSudoku = function(board) {

    function isValid(row, col, num) {
        // Check row
        for (let c = 0; c < 9; c++) {
            if (board[row][c] === num) {
                return false;
            }
        }

        // Check column
        for (let r = 0; r < 9; r++) {
            if (board[r][col] === num) {
                return false;
            }
        }

        // Check 3x3 box
        let startRow = Math.floor(row / 3) * 3;
        let startCol = Math.floor(col / 3) * 3;

        for (let r = startRow; r < startRow + 3; r++) {
            for (let c = startCol; c < startCol + 3; c++) {
                if (board[r][c] === num) {
                    return false;
                }
            }
        }

        return true;
    }

    function backtrack() {
        // Find an empty cell
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {

                if (board[row][col] === ".") {

                    // Try numbers 1 to 9
                    for (let num = 1; num <= 9; num++) {
                        let value = String(num);

                        if (isValid(row, col, value)) {

                            // Choose
                            board[row][col] = value;

                            // Explore
                            if (backtrack()) {
                                return true;
                            }

                            // Undo
                            board[row][col] = ".";
                        }
                    }

                    // No number works
                    return false;
                }
            }
        }

        // No empty cells → solved
        return true;
    }

    backtrack();
};