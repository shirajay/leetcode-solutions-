var sortedArrayToBST = function(nums) {
    function helper(left, right) {
        if (left > right) {
            return null;
        }

        let mid = Math.floor((left + right) / 2);

        let root = new TreeNode(nums[mid]);

        root.left = helper(left, mid - 1);
        root.right = helper(mid + 1, right);

        return root;
    }

    return helper(0, nums.length - 1);
};