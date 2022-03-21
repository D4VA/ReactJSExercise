const apiKey = "fs4YBEwDR8mXktdds3QvnyBgvOzwi3ZD";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`)

peticion.then( (res) => res.json())
	.then( ({data}) => {
		const {url} = data.images.original;

		const img = document.createElement('img');
		img.src = url;

		document.body.append( img );

	} )
	.catch( console.warn )