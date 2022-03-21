
// Desestructuarcion
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
};

// const { edad, clave, nombre:nombre2, } = persona;

// console.log( nombre2 );
// console.log( edad );
// console.log( clave );

const userContext = ( { clave, nombre, edad, rango = 'capitan'} ) => {

    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1234,
            lng: -12.2323
        }
    }

}


const {nombreClave, anios, latlng: { lat, lng }} = userContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);