//ejericio 1 Flattening
/*
let arrays = [[1, 2, 3], [4, 5], [6]];

let res = arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue))
console.log(res);
// Your code here.
// → [1, 2, 3, 4, 5, 6]
*/


//ejericio 2 Your own loop
/*
function loop(value, test, update, body) {
  for (let valor = value; test(valor); valor = update(valor)) {
    body(valor)
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
*/


//ejericio 3 Everything
/*

//primera forma
// function every(array, test) {
//   for (let element of array) {
//     if(!test(array[i]))
//       return false
//   }
//   return true
// }

function every(array, test) {
  return !(array.some(x => !test(x)))

}
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
*/


//ejericio 4 Everything

const SCRIPT = require('./source/chapter5/scripts');
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  let max = 0
  let direction = ''
  for(let dir of scripts){
    if (dir.count > max) {
      max = dir.count
      direction = dir.name
    }
  }
  return direction;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
