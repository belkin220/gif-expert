import { useState } from 'react'
import { AddCategory, GifGrid } from './components';
import { HeaderMenu } from './components/HeaderMenu';
import { capitalize, message } from './helpers';
import './styles.css';

const GifExpert = () => {
    
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {       
        if (categories.includes(capitalize(newCategory))) {           
            message(`${capitalize(newCategory)} ya se encuentra en la lista`, `Categoria: ${capitalize(newCategory)}`);         
            return false;
        }       
        // 1ª forma de agregar otro elemento a categories utilizando el spread (...)
        setCategories([capitalize(newCategory), ...categories]);      
    }
    
    return (
        <>
        <div className="container" style={{ marginTop: '60px' }}>
            <HeaderMenu categories = {categories}/>             
            <AddCategory
                onNewCategory = { onAddCategory } />
            {/* Listado */}
                {categories.map((category) => {
                        return (
                            <GifGrid
                                key = { category }
                                category ={ category }
                            />
                        )
                    })
                }
        </div>
    </>
    )
}

export default GifExpert
