var climbStairs = function(n) {
    let one = 1;
    let two = 1;

    for (let i = 2; i <= n; i++) {
        let current = one + two;

        two = one;
        one = current;
    }

    return one;
};