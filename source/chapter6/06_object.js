function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
var whiteRabbit = {type: "white", speak};
var hungryRabbit = {type: "hungry", speak};


var Rabbit = class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");

Rabbit.prototype.toString = function() {
  return `a ${this.type} rabbit`;
};

var toStringSymbol = Symbol("toString");

var Matrix = class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }

  get(x, y) {
    return this.content[y * this.width + x];
  }
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

var MatrixIterator = class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y == this.matrix.height) return {done: true};

    let value = {x: this.x,
                 y: this.y,
                 value: this.matrix.get(this.x, this.y)};
    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return {value, done: false};
  }
}

Matrix.prototype[Symbol.iterator] = function() {
  return new MatrixIterator(this);
};

var SymmetricMatrix = class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

var matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);

//++++++++++++++++++++++++++++++++++++++++++++
whiteRabbit.speak("I'm alive.");
speak.call(hungryRabbit, "Burp!");


function normalize() {
  console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0, 2, 3], length: 5});
console.log(Object.prototype.toString.call([1, 2]));


let matrix1 = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
for (let {x, y, value} of matrix1) {
  console.log(x, y, value);
}


console.log(matrix.get(2, 3));
