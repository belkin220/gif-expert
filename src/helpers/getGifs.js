// Función que se encarga de hacer la conexión y obtener los datos
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=lj8K2glof1D2MMhUP1ZR3sPWXIC8Dzbq&q=${category}&limit=6`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    };
  });
  return gifs;
};
