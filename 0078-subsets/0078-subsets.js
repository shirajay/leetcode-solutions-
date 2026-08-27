var subsets = function(nums) {
    const result = [];
    const current = [];

    function backtrack(start) {
        // Every current state is a valid subset
        result.push([...current]);

        for (let i = start; i < nums.length; i++) {
            // Choose
            current.push(nums[i]);

            // Explore
            backtrack(i + 1);

            // Undo
            current.pop();
        }
    }

    backtrack(0);

    return result;
};