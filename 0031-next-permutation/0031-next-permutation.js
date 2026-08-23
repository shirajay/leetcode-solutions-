var nextPermutation = function(nums) {
    let i = nums.length - 2;

    // 1. Find the first decreasing element from the right
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // 2. Find the element just greater than nums[i]
    if (i >= 0) {
        let j = nums.length - 1;

        while (nums[j] <= nums[i]) {
            j--;
        }

        // 3. Swap
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // 4. Reverse the part after i
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};