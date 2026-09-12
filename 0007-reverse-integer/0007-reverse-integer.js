var reverse = function(x) {
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    let rev = 0;

    while (x > 0) {
        let digit = x % 10;
        rev = rev * 10 + digit;
        x = Math.floor(x / 10);
    }

    rev *= sign;

    // 32-bit signed integer range
    if (rev < -2147483648 || rev > 2147483647) {
        return 0;
    }

    return rev;
};