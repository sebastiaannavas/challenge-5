// crear función para agregar "chile", "ecuador" en la propiedad disponibleParaViajar
// recorrer el objeto con FOR

const log = console.log;

const barco = {
    nombre:"imperio", 
    cantidadDePersonas:100,
    activo:true,
    costo:"1 Millon USD",
    disponibleParaViajar:["argentina", "brasil", "colombia"]
};

const claveBarco = Object.keys(barco);
const valorBarco = Object.values(barco);
let bLen = claveBarco.length;

let addCountry = () => {
    for(let idx = 0 ; idx < bLen ; idx++){
        if(claveBarco[idx] == 'disponibleParaViajar'){
            valorBarco[idx].push('chile', 'ecuador');
        }
    }
    log(barco);
}
addCountry();