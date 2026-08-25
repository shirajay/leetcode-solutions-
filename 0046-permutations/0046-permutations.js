var permute = function(nums) {
    const result = [];
    const current = [];
    const used = new Array(nums.length).fill(false);

    function backtrack() {
        // One complete permutation
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // Already used in current permutation
            if (used[i]) {
                continue;
            }

            // Choose
            used[i] = true;
            current.push(nums[i]);

            // Explore
            backtrack();

            // Undo
            current.pop();
            used[i] = false;
        }
    }

    backtrack();

    return result;
};