var combinationSum2 = function(candidates, target) {
    let result = [];

    candidates.sort((a, b) => a - b);

    function backtrack(start, current, sum) {
        if (sum === target) {
            result.push([...current]);
            return;
        }

        if (sum > target) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {

            // Skip duplicate combinations
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            // Because array is sorted
            if (sum + candidates[i] > target) {
                break;
            }

            current.push(candidates[i]);

            // i + 1 because each number can be used only once
            backtrack(i + 1, current, sum + candidates[i]);

            current.pop();
        }
    }

    backtrack(0, [], 0);

    return result;
};