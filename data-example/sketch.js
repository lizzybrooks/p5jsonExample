
// var data;
//
var flower;

function preload() {
  flower = loadJSON("flower.json");
}

// var flower = {
//   name: "sunflower",
//   "r": 255,
//   "g": 200,
//   "b": 0
// }

function setup() {
  createCanvas(400, 400);
  background(200);
  // var bird = data.birds[1].members[2];
  // createP[bird];
  fill(flower.r, flower.g, flower.b);
  ellipse(150,150,150,150);
  stroke(0);
  textSize(22);
  text(flower.name, 100, 150);

  // var birds = data.birds;
  //
  // for (var i = 0; i < birds.length; i++) {
  //   createElement('h1', birds[i].family);
  //   var members = birds[i].members;
  //   for (var j = 0; j < members.length; j++) {
  //     createDiv(members[j]);
  //   }
  // }
}
