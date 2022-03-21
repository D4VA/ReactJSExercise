

// const getImagenPromesa = () => {
// 	return new Promise( (resolve, reject) => {
// 		resolve('https://cualquiercosa.com')
// 	})
// }

const getImagen = async() => {

	try {
		const apiKey = "fs4YBEwDR8mXktdds3QvnyBgvOzwi3ZD";
		const res = await fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`)
		const {data} = await res.json();
		
		const {url} = await data.images.original;
	
		const img = document.createElement('img');
		img.src = url;
	
		document.body.append( img )
	
		console.log(url);

	} catch(error) {
		console.error(error);
	}

}

getImagen();


// peticion.then( (res) => res.json())
// 	.then( ({data}) => {
// 		const {url} = data.images.original;

// 		const img = document.createElement('img');
// 		img.src = url;

// 		document.body.append( img );

// 	} )
// 	.catch( console.warn )