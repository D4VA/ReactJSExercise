import { getHeroeById, getHeroesByOwner } from "./08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() =>{
//     const heroe = getHeroeById(10)
// 		if(heroe){
// 			resolve(heroe)
// 		}else {
// 			reject("No se pudo encontrar el heroe")
// 		}
//   }, 2000 )
// });

// promesa.then((heroe)=> { console.log(heroe) })
// .catch((err) => console.log(err));

const getHeroeByIdAsyn = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			const heroe = getHeroeById(id)
			if(heroe){
				resolve(heroe)
			}else{
				reject(`No se pudo encontrar el id:${id}`)
			}
		}, 2000 )
	});

};

getHeroeByIdAsyn(10).then((heroe)=> console.log(heroe))
.catch(console.warn)


const getHeroeByOwnerAsyn = (owner) => {
	return new Promise((resolve, reject) => {
		const owner1 = getHeroesByOwner(owner)
		setTimeout(()=>{
			if(undefined || [] == owner){
				reject(`No se pudo encontrar el personaje por owner ${owner1}`)
			}else{
				resolve(owner1)
			}
		}, 100);
	});
};

getHeroeByOwnerAsyn('DC').then((owner) => console.log(owner))
.catch((owner) => console.log(owner))