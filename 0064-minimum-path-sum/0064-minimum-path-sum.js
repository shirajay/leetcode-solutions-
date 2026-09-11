var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            // Starting cell
            if (i === 0 && j === 0) {
                continue;
            }

            // First row: can only come from left
            if (i === 0) {
                grid[i][j] += grid[i][j - 1];
            }

            // First column: can only come from top
            else if (j === 0) {
                grid[i][j] += grid[i - 1][j];
            }

            // Other cells: choose minimum of top and left
            else {
                grid[i][j] += Math.min(
                    grid[i - 1][j],
                    grid[i][j - 1]
                );
            }
        }
    }

    return grid[m - 1][n - 1];
};