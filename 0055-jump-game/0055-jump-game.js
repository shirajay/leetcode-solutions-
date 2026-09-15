var canJump = function(nums) {
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {

        // Current index is unreachable
        if (i > maxReach) {
            return false;
        }

        // Update maximum reachable index
        maxReach = Math.max(maxReach, i + nums[i]);

        // Last index is reachable
        if (maxReach >= nums.length - 1) {
            return true;
        }
    }

    return true;
};