import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

//Custom Hook
export const useFetchGifs = ( category ) => {

  const [state, setState] = useState({
    data: null,
    loading: true
  })

  useEffect( () => {
      getGifs( category )
        .then( imgs => {
          setState({
            data: imgs,
            loading: false
          })
        })
        .catch( () => {
          setState({
            data: null,
            loading: false
          })
        } )
  },)

  return state; // {data:[], loading: true}
  
}

