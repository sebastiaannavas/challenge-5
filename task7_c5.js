// agregar los nombres de las 2 mascotas en el nuevo objeto const familia
// anexar la propiedad vacunado:true para Buck y vacunado:false para Fix

const log = console.log;

// const mascotaBuck = {
//     nombre1:"buck",
//     edad1:3,
//     sexo1: "macho"
//   };

// const mascotaFix = {
//    nombre2:"fix",
//    edad2: 4,
//    sexo2: "hembra"
//  };

// const familia = {...mascotaBuck, vacunado1:true, ...mascotaFix, vacunado2:false}; 
// // if same keys, replicate when cloned.
// log(familia);

// Method 2
// clone one after one creating new properties for each case
// result is a list of declared objects to access easily

const mascotaBuck = {
  nombre:"buck",
  edad:3,
  sexo: "macho"
};

const mascotaFix = {
  nombre:"fix",
  edad: 4,
  sexo: "hembra"
};

// const familia = {Buck:{...mascotaBuck, vacunado:true}, Fix:{...mascotaFix, vacunado:false}};
// log(familia);

// Method 3
// base structure to add or change keys and values

let mascotas = [mascotaBuck, mascotaFix];

let newValue = {
  buck: true,
  fix: false
};

mascotas.map(mascota => {
    mascota['vacunado'] = newValue[mascota.nombre]; // create new key and insert refering to one existing.
  }
);

let familia = {mascotaBuck, mascotaFix}
log(familia);
// if clone one by one {..., ...} it only shows the last element (mascotaFix)

// (variable => statement) functions are usually just for one instruction.