// Code Challenge: Bubble Sort Visualization

let values = [];
let i = 0;
// let j = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // the number of elements is the same of the number
  // of pixels of the window
  values = new Array(width);

  // get a random height from 0 to the height of the window
  for(let i = 0; i < values.length; i++) {
    values[i] = random(height);
  }
}

function draw() {
  background(0);

  // sort
  if(i < values.length) {
    for(let j = 0; j < values.length - i - 1; j++) {
      let a = values[j];
      let b = values[j + 1];
      if(a > b) {
        swap(values, j, j + 1);
      }
    }
  } else {
    console.log('Elements sorted!');
    noLoop(); // stops the execution of the code within draw()
  }

  // visualize the picked values by creating lines
  for(let i = 0; i < values.length; i++) {
    stroke(255);
    line(i, height, i, height - values[i]);
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
