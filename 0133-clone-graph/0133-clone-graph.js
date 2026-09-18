var cloneGraph = function(node) {
    if (node === null) {
        return null;
    }

    const map = new Map();

    function dfs(node) {
        // If already cloned, return the existing clone
        if (map.has(node)) {
            return map.get(node);
        }

        // Create clone
        const clone = new Node(node.val);

        // Store before visiting neighbors
        map.set(node, clone);

        // Clone all neighbors
        for (const neighbor of node.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }

        return clone;
    }

    return dfs(node);
};