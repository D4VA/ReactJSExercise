import React from 'react'
import '../02-useEffect/effects.css'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'
import { Quote } from './Quote'

export const MultipleCustomHooks = () => {
  
  const { counter, increment } = useCounter(1)

  const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
  
  // console.log(!!data);

  const { author, quote } = !!data && data[0];
  

  // console.log(author, quote);


  return (
    <div>
      <h1>Breaking Qutoes </h1>
      <hr />

      {
        loading 
        ?
          (
            <div className='alert alert-info text-center'>
            Loading...
            </div>
          )
        :
          (
            <Quote 
              author={ author }
              quote= { quote }
              increment = { increment }
            />
          )
      }

    </div>
  )
}


