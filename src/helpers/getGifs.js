
export const getGifs = async (categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=WhXXdsSDYIVsYHdtTWlXHcBBqd0PuM2P`;
    const resp = await fetch(url);
    //trae el json desustructuracion
    const { data } = await resp.json();
    //Traer elementos especificos
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    //console.log(data); para identificar la estructura.
    return gifs;
}