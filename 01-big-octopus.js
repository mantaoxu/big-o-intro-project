let fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
  'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'];

function quadraticBiggestFish(fishes) {
  // Code goes here ...
  let longestFish = '';
  for (let i = 0; i < fishes.length; i++) {
    for (let j = i + 1; j < fishes.length; j++) {
      let fish1 = i;
      let fish2 = j;
      if (fishes[fish1].length > fishes[fish2].length && fishes[fish1].length > longestFish.length) {
        longestFish = fishes[fish1];
      } else if (fishes[fish1].length < fishes[fish2].length && fishes[fish2].length > longestFish.length) {
        longestFish = fishes[fish2];
      }
    }
  }
  return longestFish;
}
// console.log(quadraticBiggestFish(fishies))

function nlognBiggestFish(fishies) {
  fishies.sort((a, b) => b.length - a.length)
  console.log(fishies)
  return fishies[0];
  // if (fishes.length === 1) {
  //   return longest
  // }
  // for (let i = 0; i <= 1; i++) {
  //   let fish = fishies[i]
  //   if (fish.length > longest.length) {
  //     longest = fish
  //   }
  // }
  // fishies.shift()
  // return nlognBiggestFish(fishies, longest)
}

// console.log(nlognBiggestFish(fishies))

function linearBiggestFish(fishes) {
  let longest = ''
  for (let i = 0; i < fishes.length; i++) {
    let fish = fishes[i]
    if (fish.length > longest.length) {
      longest = fish
    }
  }
  return longest
}


tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]

function slowDance(direction, tilesArray) {
  // Code goes here ...
  for( let i = 0; i < tilesArray.length; i++){
    if(direction === tilesArray[i]){
      return i;
    }
  }
}
// console.log(slowDance('right',tilesArray));


tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
  // Code goes here ...
  return tilesObj[direction];
}
console.log(fastDance('down', tilesObj));