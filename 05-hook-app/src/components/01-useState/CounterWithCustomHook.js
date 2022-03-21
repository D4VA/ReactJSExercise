import React from 'react'
import { useCouter } from '../hooks/useCouter'

import './counter.css'

export const CounterWithCutomHook = () => {
  
  const {state:counter, increment, decrement, reset} = useCouter(100);

  return (
    <div>
      <h1>CounterWithCutomHook: { counter } </h1>
      <hr />

      <button onClick={ () => increment(2) } className='btn' > +1 </button>
      <button onClick={ reset } className='btn' > Reset </button>
      <button onClick={ () => decrement(2) } className='btn' > -1 </button>
    </div>
  )
}
