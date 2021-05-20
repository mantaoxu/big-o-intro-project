function firstAnagram(str1, str2) {

  //////below code does not work!!///////
  // let str2Arr = str2.split('');
  // for(let i = 0; i < str1.length; i++){
  //   let letter = str1[i];
  //   let index = str2Arr.indexOf(letter);
  //     str2Arr.splice(index, 1);
  // }
  // if(str2Arr.length === 0) {
  //   return true;
  // }
  // return false;

  /**********the code below working */
  let arr1 = str1.split('');
  let arr2 = str2.split('');

  for(let i = 0; i < arr1.length; i++) {
    let letter = arr1[i];
    let index = arr2.indexOf(letter);
    if(index < 0) return false;
    arr2.splice(index, 1);

  }
  return arr2.length === 0;
}
// console.log(firstAnagram("elvis", "lives")) //true
// console.log(firstAnagram("gizmo", "sally")) // false


// O(n*log(n)) linearithmic time
// O(n) linear space
// O(n*log(n))
function secondAnagram(str1, str2) {
  
  str1.split('').sort().join('')
  str2.split('').sort().join('')

  return str1 !== str2;
}
// console.log(secondAnagram("elvis", "lives")) // true
// console.log(secondAnagram("gizmo", "sally")) //false


function thirdAnagram(str1, str2) {
  let letterCountStr1 = {};
  let letterCountStr2 = {};
  let str1Arr = str1.split('');
  let str2Arr = str2.split('');

  str1Arr.forEach(el => {
    letterCountStr1[el] = (letterCountStr1[el] || 0) + 1;
  });
  str2Arr.forEach(el => {
    letterCountStr2[el] = (letterCountStr2[el] || 0) + 1;
  });

  const haveSameCount = function(obj1, obj2){
    const obj1Length = Object.keys(obj1).length;
    const obj2Length = Object.keys(obj2).length;

    if(obj1Length === obj2Length) {
      return Object.keys(obj1).every(
        key => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]
      );
    }
    return false;
  }
  return haveSameCount(letterCounts1, letterCounts2);

  
}
// console.log(secondAnagram("elvis", "lives")) // true
// console.log(secondAnagram("gizmo", "sally")) //false



// O(n) linear time
// O(1) constant space (same logic as above)
function fourthAnagram(str1, str2) {
  // Code goes here ....
  let letterSums = {}

  // If we do the exact same subractions for each letter in
  // str2 as we do additions for str1, letter_sums will all be 0.
  str1.split("").forEach(e => letterSums[e] = (letterSums[e] || 0) + 1);
  str2.split("").forEach(e => letterSums[e] = (letterSums[e] || 0) - 1);

  // It's a zero-sum game!
  return Object.values(letterSums).every(sum => sum === 0);
}
console.log(secondAnagram("elvis", "lives")) // true
// console.log(secondAnagram("gizmo", "sally")) //false
