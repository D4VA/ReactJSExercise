// Funciones en JS

// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;

// console.log( saludar("goku") );
console.log(saludar2('vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () => ({
  uid: 'ABC123',
  username: 'El_papi1502'
})

const user = getUser();

console.log(user);


// Tarea
// 1. Tranformen a una función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas

const getUsuarioActivo = (nombre) => ({
  uid: 'ABC2134',
  username: nombre
});

const UsuarioActivo = getUsuarioActivo('Fernando');
console.log(UsuarioActivo);