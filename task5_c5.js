// iterar Array p con FOR, crear nuevo Array y mostrar 'fooziman' en mayúsculas

const log = console.log;

const p = ["foo", "zi", "man"];
let pText = '';
let newP = [''];
let pLen = p.length;

for(let idx = 0 ; idx < pLen ; idx++){
    newP[idx] = p[idx].toUpperCase();
}
pText = newP.join('');
log(pText);

// for(let idx = 0 ; idx < pLen ; idx++){
//     newP[0] += p[idx].toUpperCase();
// }
// log(newP[0]);

// if p = ['foo', 'zi', 'man', 'qux', 'i', 'boy'] and result = FOOZIMAN QUXIBOY
// need conditions p[idx].toUpperCase(); if(idx > 3) { newP[1] = ...; } log(`${newP[0]} ${newP[1]}`);
// || let pText = newP.join(' '); log(pText);

// for(let idx = 0 ; idx < pLen ; idx++){
//     pText += p[idx].toUpperCase();
// }
// log(pText);