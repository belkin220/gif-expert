// Custom Hook: Obtiene las imagenes. Utiliza la función getGifs.js

import { useEffect, useState } from "react";
import { getGifs, message, capitalize } from "../helpers";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true )

    const getImages = async () => {       
    const newImages = await getGifs(category);
      
    if( newImages.length === 0) {     
      message(`No se han encontrado imágenes relativas a ${capitalize(category)}`);
      return false;
     }         
    setImages(newImages);
    setIsLoading(false);
  }
    useEffect(() => {
    getImages();
       
    }, [])

  return (
    {
        images,
        isLoading
    }
  )
}
