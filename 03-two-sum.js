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
// console.log(okayTwoSum1([0, 1, 5, 7], 6)); //true;
// console.log(okayTwoSum1([0, 1, 5, 7], 10)); //false;

//O(nlogn) linearithmic time
//O(n) linear space
// another implementation using binary search
function okayTwoSum2(arr, targetSum) {
  arr.sort();
  for(let i = 0; i < arr.length; i++){
    let num = arr[i];
    let complement = targetSum - num;
    let complementIndex = binarySearch(arr, complement);
    if (complementIndex !== -1 && complementIndex !== i){
      return true;
    }
  }
  return false;
}
function binarySearch(array, target) {
  let lowerIdx = 0;
  let upperIdx = array.length - 1;
  let midIdx;

  while (lowerIdx <= upperIdx) {
    midIdx = Math.floor((lowerIdx + upperIdx) / 2);
    if (array[midIdx] < target) {
      lowerIdx = midIdx + 1;
    } else if (array[midIdx] > target) {
      upperIdx = midIdx - 1;
    } else {
      return midIdx;
    }
  }

  return -1;
}
// console.log(okayTwoSum2([0, 1, 5, 7], 6)); //true;
// console.log(okayTwoSum2([0, 1, 5, 7], 10)); //false;


//O(n) linear time
//O(n) linear space
function twoSum(arr, targetSum) {
  let complements = {}
  for (let num of arr) {
    let complement = targetSum - num
    if (complements[complement]) return true
    complements[num] = true
  }

  return false
}
// console.log(twoSum([0, 1, 5, 7], 6)); //true;
// console.log(twoSum([0, 1, 5, 7], 10)); //false;

//O(n) linear time
//O(n) linear space
// This can be easily adapted to also return the indices of the two numbers:
function twoSumIndices(arr, targetSum) {
  let complements = {}
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    let complement = targetSum - num
    if (complements[complement]) {
      let complementIndex = complements[complement]
      return [i, complementIndex]
    }
    complements[num] = i
  }
  return [];
}
// console.log(twoSumIndices([0, 1, 5, 7], 6));  //[2, 1]
// console.log(twoSumIndices([0, 1, 5, 7], 10));  // []
