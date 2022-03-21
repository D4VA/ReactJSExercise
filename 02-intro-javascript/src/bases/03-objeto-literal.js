

const persona = {
    nombre: 'Tony',
    apellido: 'Start',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 554545,
        lat: 14.3232,
        lng: 34.92333
    }
}

// console.table( persona );

const persona2 = { ...persona };

persona2.nombre = 'Peter'

console.log(persona);
console.log(persona2);