var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        // Find the lowest buying price
        minPrice = Math.min(minPrice, price);

        // Calculate profit if we sell today
        let profit = price - minPrice;

        // Update maximum profit
        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
};