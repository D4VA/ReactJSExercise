import React from 'react'
import { useState } from 'react';

export const AddCategory = ( { setCategories } ) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ( e ) => {
    setInputValue(e.target.value)
  }

  const handleSumbit = ( e ) => {
    e.preventDefault()
    
    if ( inputValue.trim().length > 2 ){
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue('');
    }
    
  }


  return (
    <form onSubmit={ handleSumbit }>
      <input 
        type="text"
        value={inputValue}
        onChange= { handleInputChange }
      />
    </form>
  )
}
