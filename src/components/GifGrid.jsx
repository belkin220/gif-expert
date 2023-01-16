
import { useFetchGifs } from "../hooks/useFetchGifs"; // Custom Hook

import GifItem from "./GifItem";


export const GifGrid = ({ category }) => {

 
  const { images, isLoading } = useFetchGifs(category);

  return (
    <> 
     <div className="category" id={category}></div> 
      <li className={ images.length < 1 ? 'remove' : 'list-group-item error' } id={"error"}>       
        {isLoading ? '' : 'Categoria: ' + category}
      </li>     
      <div className="row">     
        {
          images.map((image) => (
            <GifItem key={ image.id }
              category = {category}
              {...image} />
          ))
        }
      </div>

    </>
  )
}

