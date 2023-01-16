import React, { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    
   const [inputValue, setInputValue] = useState('');

   // funcion para obtener el nuevo valor al teclear en el input
   const onInputChange = (event) => {
    setInputValue(event.target.value)
    
   }

   const onSubmitForm = (event) => {
        event.preventDefault();
        // Evaluar que el input tenga al menos 2 caracteres
        if(inputValue.trim().length <= 1) return;
        //
        onNewCategory(inputValue.trim());
        // Lmpiar el input
        setInputValue('');        
   }
   
   return (
    
    <form onSubmit = { onSubmitForm }   > 
        <input
            className='form-control'
            type = "text"
            placeholder='Buscar Gifs'
            value = { inputValue }
            onChange = { onInputChange }
           />
    </form>
    
   
   
  )
}

