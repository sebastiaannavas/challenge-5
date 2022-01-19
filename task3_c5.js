// Agregar el elemento 800 al final del array 
// Anexar el elemento 50 al inicio del array 
// Ingresar el elemento 200 despues del elemento 100

const log = console.log;

const z = [100, 300, 400, 500, 600, 700];
z.push(800);
z.unshift(50);
const zLen = z.length;

for(let pos = zLen; pos >= 0; pos--) {
    if(z[pos] >= 300){
        z[pos + 1] = z[pos];
    }
}

cbAddNumber = (number, pos) => { 
    if(number == 100){
        z.splice(pos + 1, 1, 200); 
    }
}
z.find(cbAddNumber);
log(z);


// Method 2

// reversed .map() = assign original Array reversed to a new variable and do normal .map()
// let z2 = z.reverse();
// z2.map(function...);
// z2.find(cbAddNumber); 
// log(z2);