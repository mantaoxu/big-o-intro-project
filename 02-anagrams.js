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

  return str1 !== str2;
}
console.log(secondAnagram("elvis", "lives")) // true
console.log(secondAnagram("gizmo", "sally")) //false


function thirdAnagram(str1, str2) {
  // Code goes here ....
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
