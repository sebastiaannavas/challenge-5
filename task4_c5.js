// seleccionar elementos con la letra 'b' y colocarlas en un nuevo Array

const log = console.log;

const n = ["foo", "bar", "baz", "boot", "qux", "origin"];
let newArray = [];

cbFindB = (string) => { 
    if(string.charAt(0) == 'b'){ // || cbFindB = (string, i)... charAt(i)
        newArray.push(string);
    }   
}

n.filter(cbFindB);
log(newArray);

// Method 2
// to search for every letter of the string
let newN = n.filter(str => str.includes('b')); // returns already an Array.
log(newN);