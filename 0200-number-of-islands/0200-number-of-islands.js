var numIslands = function(grid) {
    let islands = 0;
    let rows = grid.length;
    let cols = grid[0].length;

    function dfs(r, c) {
        // Out of bounds or water
        if (
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols ||
            grid[r][c] === "0"
        ) {
            return;
        }

        // Mark as visited
        grid[r][c] = "0";

        // Up
        dfs(r - 1, c);

        // Down
        dfs(r + 1, c);

        // Left
        dfs(r, c - 1);

        // Right
        dfs(r, c + 1);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {

            if (grid[r][c] === "1") {
                islands++;

                // Visit entire island
                dfs(r, c);
            }
        }
    }

    return islands;
};