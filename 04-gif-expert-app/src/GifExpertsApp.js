import { useState } from 'react';
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';


export const GifExpertsApp = () => {
  
  const [categories, setcategories] = useState(['One piece'])


  return (
    <>
      <h2>GifExpertsApp</h2>
      <AddCategory setCategories={setcategories}/>
      <hr />
      <ol>
        {
          categories.map( (category) =>
           <GifGrid 
           key={ category }
           category={ category }/>
           )
        }
      </ol>
    </>
  
  )
}
