
import { useState } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { capitalize } from "../helpers";

const GifItem = (images) => {
  const MySwal = withReactContent(Swal);
  const [image, setImage] = useState([images]);

  const removeElement = (id) => {
    const newImages = image.filter((img) => img.id !== id);
    setImage(newImages);
    MySwal.fire({
      title: <strong>Good job!</strong>,
      html: <i>{capitalize(images.title) + ' ha sido eliminado con éxito.'}</i>,
      icon: 'success'
    })

  };

  return (
    <>
      {image.map((img) => (
        <div key={img.id} className="col-sm-4 mt-4" >
          <div className="card mb-3">
            <img src={img.url} className="card-img-top" alt={img.title} width={214} height={200} />
            <div className="card-body" style={{ width: '214px', height: '250px' }}>
              <h5 className="card-title">{img.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <div style={{ position: 'absolute', bottom: '-10px' }}>
                <button className="btn btn-primary" onClick={() => removeElement(img.id)}
                  style={{ marginBottom: '25px' }}>Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default GifItem;


