/* Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after
applying offer. */

let item;
let prices = [250, 645, 300, 900, 50];
for (item = 0 ; item < prices.length ; item++) {
    prices[item] = prices[item] - ((prices[item]*10)/100);
}
console.log(prices);