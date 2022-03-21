
export const getGifs = async(category) => {

  try{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=fs4YBEwDR8mXktdds3QvnyBgvOzwi3ZD`;
    const res = await fetch(url);
    const {data} = await res.json();

    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    });


    return gifs;
  } catch{
    throw new Error('No se han encontrado las imagenes')
  }
}