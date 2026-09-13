var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);

    let result = [];
    let current = [];

    function backtrack(start) {
        // Current subset ને answer માં add કરો
        result.push([...current]);

        for (let i = start; i < nums.length; i++) {

            // Same level પર duplicate skip કરો
            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            }

            current.push(nums[i]);

            backtrack(i + 1);

            current.pop();
        }
    }

    backtrack(0);

    return result;
};