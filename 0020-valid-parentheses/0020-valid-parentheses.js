var isValid = function(s) {
    let stack = [];

    for (let char of s) {

        if (char === '(') {
            stack.push(')');
        } 
        else if (char === '[') {
            stack.push(']');
        } 
        else if (char === '{') {
            stack.push('}');
        } 
        else {
            if (stack.pop() !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};