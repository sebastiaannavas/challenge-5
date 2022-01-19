// comprobar que 't4' existe

const log = console.log;

const t = ["t1", "t2", "t3", "t4", "t5"];

cbFindT = (code) => { 
    if(code == 't4'){
        log(`${t[3]}: sí existe`);
    }
}
t.find(cbFindT);