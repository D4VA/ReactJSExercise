import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })

  const {name, email} = formState;


  useEffect( () => { 
    // console.log("hey");
    
  }, []);//solo cuando se carga el formulario por primera vez "Mount"

  useEffect( () => { 
    // console.log("formstate Cambio");
  }, [formState]);

  useEffect( () => { 
    // console.log("email Cambio");
  }, [email]);


  const handleInputChange = ({target}) => {
    setFormState({
      ...formState,
      [ target.name ]:target.value
    })
    console.log([target.name], target.value);
  }

  return (
    <>
      <h1>UseEffect</h1>
      <hr />

      <div className='form-group'>
        <input 
            type="text"
            name="name"
            className='form-control'
            placeholder='name'
            autoComplete='off'
            value= { name }
            onChange={ handleInputChange }
        />
      </div>

      <div className='form-group'>
        <input 
            type="text"
            name="email"
            className='form-control'
            placeholder='email@gmail.com'
            autoComplete='off'
            value= { email }
            onChange={ handleInputChange }
        />
      </div>

      { (name === '123') && <Message /> }

    </>
  )
}
