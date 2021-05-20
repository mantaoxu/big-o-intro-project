//O(n^2) quadratic time
//O(1) constant space
function badTwoSum(arr, targetSum) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) return true;
    }
  }
  return false;
}
// console.log(badTwoSum([0, 1, 5, 7], 6)); //true;
// console.log(badTwoSum([0, 1, 5, 7], 10)); //false;



function okayTwoSum1(arr, targetSum) {
  arr.sort();   //sort the function first
  let start = 0;
  let end = arr.length -1;

  while(start < end){
    let currentSum = arr[start] + arr[end];
    if(currentSum > targetSum){
      end -= 1;
    } else if(currentSum < targetSum){
      start += 1;
    } else{
      return true;
    }
  }
  return false;

}
console.log(okayTwoSum1([0, 1, 5, 7], 6)); //true;
console.log(okayTwoSum1([0, 1, 5, 7], 10)); //false;


function okayTwoSum2(arr, targetSum) {
  // Code goes here ...
}
// console.log(okayTwoSum2([0, 1, 5, 7], 6)); //true;
// console.log(okayTwoSum2([0, 1, 5, 7], 10)); //false;


function twoSum(arr, targetSum) {
  // Code goes here ...
}
// console.log(twoSum([0, 1, 5, 7], 6)); //true;
// console.log(twoSum([0, 1, 5, 7], 10)); //false;


function twoSumIndices(arr, targetSum) {
  // Code goes here ...
}
// console.log(twoSumIndices([0, 1, 5, 7], 6)); //true;
// console.log(twoSumIndices([0, 1, 5, 7], 10)); //false;
