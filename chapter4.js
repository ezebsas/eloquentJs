/*
function reverseArray(array) {
  let newArray = []
  for (let i = array.length-1; i >= 0; i--) {
    newArray.push(array[i])
  }
  return newArray
}

function reverseArrayInPlace(array) {
  let newArray = reverseArray(array)
  for (let i = 0; i < array.length; i++) {
    array[i] = newArray[i]
  }
  return array
}
function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

// console.log(reverseArray("asdf"));
// let array = [1,2,3,4,5,6]
// reverseArrayInPlace(array)
// console.log(array);

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};


function arrayToList(parArray) {
  let array = reverseArray(parArray)
  list = null
  for (let i = 0; i < array.length; i++) {
    list = {
      value: array[i],
      rest: list
    }
  }
  return list
}

function listToArray(list) {
  let array = []
  for(let node = list; node; node= node.rest){
    array.push(node.value)
  }
  return array;
}

function prepend(element, list) {
  let newList = {
    value: element,
    rest: list
  }
  return newList;
}

function nth(list, position) {
  if (list ===null) {
    return undefined;
  }
  if (position == 0) {
    return list.value;
  }
  return nth(list.rest, position-1)

}

console.log(JSON.stringify(arrayToList([1,2,3])));
console.log(listToArray(list));
console.log(JSON.stringify(prepend(4,list)));
console.log(nth(list,1));

*/

function deepEqual(a, b) {
  if(a === b) return true;
  if(typeof a != 'object' || typeof b != 'object' || b== null|| a== null)return false;
  let keys1 = Object.keys(a), keys2 = Object.keys(b)
  if (keys1.length != keys2.length) return false;
  for (let val of  keys1){
    if(deepEqual(a[val], b[val]) ==false) return false;
  }
  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(null,null))
