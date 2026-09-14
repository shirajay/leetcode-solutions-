var buildTree = function(preorder, inorder) {
    const map = new Map();

    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }

    let preIndex = 0;

    function helper(left, right) {
        if (left > right) {
            return null;
        }

        let rootValue = preorder[preIndex++];
        let root = new TreeNode(rootValue);

        let index = map.get(rootValue);

        root.left = helper(left, index - 1);
        root.right = helper(index + 1, right);

        return root;
    }

    return helper(0, inorder.length - 1);
};