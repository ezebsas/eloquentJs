/*

var Vec = class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vector){
    return new Vec(this.x + vector.x, this.y + vector.y)
  }

  minus(vector){
    return new Vec(this.x - vector.x, this.y - vector.y)
  }

  get length(){
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

class Group {
  constructor(){
    this.elements = []
  }

  add(value){
    if(!this.has(value)){
      this.elements.push(value)
    }
  }

  delete(value){
    if(this.has(value)){
      this.elements.splice(this.elements.indexOf(value), 1);
    }
  }

  has(value){
    return this.elements.indexOf(value)>=0
  }

  static from(array){
    let group = new Group()
    for(let e of array){
      group.add(e)
    }
    return group
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));


var GroupIterator = class GroupIterator{
  constructor(group){
    this.x = 0
    this.group = group
  }

  next(){
    if (this.x == this.group.elements.length) return {done: true};

    let result = {value: this.group.elements[this.x],
                 done: false }
    this.x++;
    return result
  }
}
Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
};

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c

*/


let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(Object.prototype.hasOwnProperty.call(map, "hasOwnProperty"))
