var firstMissingPositive = function(nums) {
    const n = nums.length;

    // Put each number x at index x - 1
    for (let i = 0; i < n; i++) {
        while (
            nums[i] > 0 &&
            nums[i] <= n &&
            nums[nums[i] - 1] !== nums[i]
        ) {
            const correctIndex = nums[i] - 1;

            [nums[i], nums[correctIndex]] =
                [nums[correctIndex], nums[i]];
        }
    }

    // Find the first number that is not at its correct index
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return n + 1;
};