// eliminar propiedad pais

const log = console.log;

const fichaPersona = {
    nombre:"karen",
    correo:"karen@karen.com",
    alias:"lakarinz",
    pais:"bananero",
    vive:true     
};
delete fichaPersona.pais;
log(fichaPersona);