//----------------------------------------


// runRobot(VillageState.random(), randomRobot);
// runRobot(VillageState.random(), routeRobot, []);
// runRobot(VillageState.random(), goalOrientedRobot, []);
function contarPasos(state, robot, memory) {
  for (let pasos = 0;; pasos++) {
    if (state.parcels.length == 0) return pasos;
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let steps1 =0, steps2 = 0;
  for (var i = 0; i < 100; i++) {
    let tarea = VillageState.random(10)
    steps1 += contarPasos(tarea, robot1, memory1)
    steps2 += contarPasos(tarea, robot2, memory2)
  }
  console.log(`El robot 1 tiene un promedio de ${steps1/100} pasos por tarea`);
  console.log(`El robot 2 tiene un promedio de ${steps2/100} pasos por tarea`);
}

// compareRobots(randomRobot, [], goalOrientedRobot, []);


/*------------------------------------------------------------*/

function miRobot({place, parcels}, route) {
  if (route.length == 0) {
      route = parcels
        .map(p => {
          if (p.place != place) {
            return {route:findRoute(roadGraph, place, p.place), agarrar: true}
          }else {
            return {route:findRoute(roadGraph, place, p.address), agarrar: false}
          }
        })
        .reduce((anterior, actual) =>{
          if (actual.route.length < anterior.route.length || anterior.route.length == actual.route.length && actual.agarrar ) {
            return actual
          }else {
            return anterior
          }
        }).route
  }
  return {direction: route[0], memory: route.slice(1)};
}

// compareRobots(miRobot, [], goalOrientedRobot, []);

/* --------------------------------------------------  */

let PGroup = class PGroup {
  constructor(data = []){
    this.elements = data
  }

  add(value){
    return new PGroup(this.elements.concat(value));
  }

  delete(value){
    return new PGroup(this.elements.filter(e => e != value));
  }

  has(value){
    return this.elements.indexOf(value)>=0
  }

}

PGroup['empty'] = new PGroup();

let a = PGroup.empty.add("a");
console.log(a);
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
