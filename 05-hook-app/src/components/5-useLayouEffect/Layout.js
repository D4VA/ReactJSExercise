import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'
import { Quote } from '../03-examples/Quote'

import './layout.css'
import { useLayoutEffect } from 'react'

export const Layout = () => {
  
  const { counter, increment } = useCounter(1)

  const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
  
  // console.log(!!data);

  const { quote } = !!data && data[0];
  

  // console.log(author, quote);


  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />

        <Quote 
          quote= { quote }
          increment = { increment }
        />
          
    </div>
  )
}

