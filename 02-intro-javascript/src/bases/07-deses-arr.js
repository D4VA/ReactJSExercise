
const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ p1, , p2,] = personajes;

console.log( p1, p2 );

const retornaArreglo = () => {
    return ['ABC', 123]
}

const [ letras, numeros ] = retornaArreglo();

console.log(letras, numeros);


// Tarea
// 1. el primero valor del arr se llamara nombre
// 2. se llamara setNombre

const usandoStado = (nombre) => {
    return [ nombre, ()=>{ console.log('Hola mundo') } ];
}

const [nombre, setNombre] = usandoStado( 'Goku' );

console.log(nombre);
setNombre();