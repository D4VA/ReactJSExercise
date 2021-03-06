import { MultipleCustomHooks } from '../03-examples/MultipleCustomHook';
import '../02-useEffect/effects.css';
import { useState } from 'react';

export const RealExampleRef = () => {
  
  const [show, setShow] = useState(false);
  
  

  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr />

      { show &&  <MultipleCustomHooks />}

      <button
        className='btn btn-primary mt-05'
        onClick= { ()  => {
          setShow( !show )
        }}
      >
          Show/Hide
      </button>

    </div>
  )
}
