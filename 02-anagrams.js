function firstAnagram(str1, str2) {
  // Code goes here ....
  let str2Arr = str2.split('');
  for(let i = 0; i < str1.length; i++){
    let letter = str1[i];
    let index = str2Arr.indexOf(letter);
      str2Arr.splice(index, 1);
  }
  if(str2Arr.length === 0) {
    return true;
  }
  return false;
}
console.log(firstAnagram("elvis", "lives"))



function secondAnagram(str1, str2) {
  // Code goes here ....
}


function thirdAnagram(str1, str2) {
  // Code goes here ....
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
