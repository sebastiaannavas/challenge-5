// iterar los elementos con WHILE

const log = console.log;

const f = ["f1", "f2", "f3", "f4", "f5"];
let i = 0;
let fLen = f.length;

let iterateF = () => {
    while(i < fLen) {
        log(f[i]);
        i++
    }
}
iterateF();