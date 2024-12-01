// 整数的 数组形式  num 是按照从左到右的顺序表示其数字的数组。
// 例如，对于 num = 1321 ，数组形式是 [1,3,2,1] 。
// 给定 num ，整数的 数组形式 ，和整数 k ，返回 整数 num + k 的 数组形式 。

// 得出1、1<=num.length<=10000；2、0<=num[i]<=9；3、num不包含任何前导0，除了0本身；4、1<=k<=10000
/**
 * @param {number[]} num
 * @param {number} key
 * @return {number[]}
 */
var addToArrayFrom = function (num, k) {
  let carry = 0 // 是否进位 0-不进位 1-进位
  let i = num.length - 1
  let result = []
  // 逐位相加
  while (i >= 0 || k > 0 || carry > 0) {
    let digit = (i >= 0 ? num[i] : 0) + (k % 10) + carry
    carry = Math.floor(digit / 10)
    digit = digit % 10
    result.unshift(digit)
    k = Math.floor(k / 10)
    i--
  }
  return result
}

console.log(addToArrayFrom([2, 1, 5], 806))
