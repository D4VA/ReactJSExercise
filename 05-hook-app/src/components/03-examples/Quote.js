import { useRef, useLayoutEffect, useState } from "react"


export const Quote = ( {quote, author, increment} ) => {
  
  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({})

  useLayoutEffect( () => {
    setBoxSize( pTag.current.getBoundingClientRect() );
  },[quote])


  return( 
    <div className='divApika'>
      <blockquote className='blockquote text-right'>
        <p 
          className='mb-0'
          ref= {pTag}
        >{quote}
        </p>
        <footer className='blockquote-footer'> {author} </footer>
      </blockquote>

      <pre>{ JSON.stringify(boxSize, null, 3) } </pre>

      <div>
        <button
          className='btn btn-primary buttonApika'
          onClick={increment}
        >
            Siguiente quote
        </button>
      </div>
    </div>
  )
}