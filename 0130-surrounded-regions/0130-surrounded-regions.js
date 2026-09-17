var solve = function(board) {
    const m = board.length;
    const n = board[0].length;

    // DFS to mark boundary-connected O's as safe
    function dfs(row, col) {
        // Out of bounds or not O
        if (
            row < 0 || row >= m ||
            col < 0 || col >= n ||
            board[row][col] !== 'O'
        ) {
            return;
        }

        // Mark as safe
        board[row][col] = '#';

        // Visit 4 directions
        dfs(row + 1, col); // down
        dfs(row - 1, col); // up
        dfs(row, col + 1); // right
        dfs(row, col - 1); // left
    }

    // 1. Process first and last rows
    for (let col = 0; col < n; col++) {
        if (board[0][col] === 'O') {
            dfs(0, col);
        }

        if (board[m - 1][col] === 'O') {
            dfs(m - 1, col);
        }
    }

    // 2. Process first and last columns
    for (let row = 0; row < m; row++) {
        if (board[row][0] === 'O') {
            dfs(row, 0);
        }

        if (board[row][n - 1] === 'O') {
            dfs(row, n - 1);
        }
    }

    // 3. Capture surrounded O's
    // 4. Restore safe O's
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (board[row][col] === 'O') {
                board[row][col] = 'X';
            } else if (board[row][col] === '#') {
                board[row][col] = 'O';
            }
        }
    }
};