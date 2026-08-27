var isMatch = function(s, p) {
    const m = s.length;
    const n = p.length;

    const dp = Array.from(
        { length: m + 1 },
        () => Array(n + 1).fill(false)
    );

    // Empty string matches empty pattern
    dp[0][0] = true;

    // Handle patterns like a*, a*b*, a*b*c*
    for (let j = 2; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {

            // Normal character or '.'
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }

            // '*'
            else if (p[j - 1] === '*') {

                // Use '*' zero times
                dp[i][j] = dp[i][j - 2];

                // Use '*' one or more times
                if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }

    return dp[m][n];
};