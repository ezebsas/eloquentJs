class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  let result;
  for(;;){
    try {
      result = primitiveMultiply(a,b)
      break;
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure) {

      } else {
        throw e;
      }
    }
  }
  return result;
}

console.log(reliableMultiply(8, 8));
// → 64

/*------------------------------------------------------------*/
const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
  box.unlock()
  try {
    body()
  } finally {
    box.lock()
  }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true
