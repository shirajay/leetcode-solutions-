var combinationSum = function(candidates, target) {
    let result = [];

    function backtrack(start, current, sum) {
        // Target reached
        if (sum === target) {
            result.push([...current]);
            return;
        }

        // Sum exceeded
        if (sum > target) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            current.push(candidates[i]);

            // i રાખવાથી same number ફરીથી use કરી શકાય
            backtrack(i, current, sum + candidates[i]);

            current.pop();
        }
    }

    backtrack(0, [], 0);

    return result;
};