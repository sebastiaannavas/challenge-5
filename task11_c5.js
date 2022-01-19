// excluir a todos los valores 'v1' y crear un nuevo Array con los otros

const log = console.log;

const v = ["v1", "v1", "v2", "v3", "v1", "v4", "v5"];
const newV = [];

cbExcludeV = (code) => { 
    if(code != 'v1'){
        newV.push(code);
    }
}
v.filter(cbExcludeV);
log(newV);