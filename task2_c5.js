// Object Merge

const log = console.log;

const x = [100, 200, 300];
const y = [400, 500, 600];

// Method 1
let z = [...x, ...y];
log(`Array 1 --> ${z}`);

// Method 2
let y2 = ['', '', '', ...y];
let z2 = Object.assign([], y2, x);
log(`Array 2 --> ${z2}`);

// const z2 = Object.assign({}, y2, x); 
// log(`Array 2 --> ${z2[0]}`);

// the keys for each Array are: 0, 1, 2 and they become the properties in Object.assign
// when ({}, x) 1:200 but then y => 1:500 and replaces it in ({}, x, y)
// it can be demonstrated in log(z2) from ({}, y2, x)