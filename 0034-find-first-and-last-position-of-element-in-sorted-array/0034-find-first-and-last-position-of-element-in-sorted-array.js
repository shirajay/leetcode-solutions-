var searchRange = function(nums, target) {
    function findFirst() {
        let left = 0;
        let right = nums.length - 1;
        let ans = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                ans = mid;
                right = mid - 1; // left side માં હજુ target શોધો
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return ans;
    }

    function findLast() {
        let left = 0;
        let right = nums.length - 1;
        let ans = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                ans = mid;
                left = mid + 1; // right side માં હજુ target શોધો
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return ans;
    }

    return [findFirst(), findLast()];
};