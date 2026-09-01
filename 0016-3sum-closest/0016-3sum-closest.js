var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);

    let closest = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            // Exact match
            if (sum === target) {
                return sum;
            }

            // Update closest sum
            if (Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum;
            }

            // Move pointers
            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closest;
};