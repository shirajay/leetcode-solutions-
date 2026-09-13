var largestRectangleArea = function(heights) {
    let stack = [];
    let maxArea = 0;

    heights.push(0); // Sentinel to process remaining bars

    for (let i = 0; i < heights.length; i++) {

        while (
            stack.length > 0 &&
            heights[i] < heights[stack[stack.length - 1]]
        ) {
            let height = heights[stack.pop()];

            let width;

            if (stack.length === 0) {
                width = i;
            } else {
                width = i - stack[stack.length - 1] - 1;
            }

            maxArea = Math.max(maxArea, height * width);
        }

        stack.push(i);
    }

    return maxArea;
};