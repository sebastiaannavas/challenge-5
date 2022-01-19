// mostrar recorrido inverso del Array

const log = console.log;

const r = [100, 200, 300, 400, 500];
let rLen = r.length - 1;

let inverso = () => {
    for(let idx = rLen ; idx >= 0 ; idx--){
        log(r[idx]);
    }
}
inverso();