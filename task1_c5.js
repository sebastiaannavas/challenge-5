// iterar y pasar a un Array nuevo.

const log = console.log;

const a = [100, 200, 300, 400, 500];
const b = [];

cbPass = (pass, idx) => { 
    b[idx] = pass; 
}

a.map(cbPass);
log(b);