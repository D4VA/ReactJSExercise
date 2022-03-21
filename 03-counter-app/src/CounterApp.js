import PropTypes from 'prop-types';
import { useState } from 'react'


const CounterApp = ({value = 0}) => {

  const [ counter, setCounter ] = useState( value ); //[] con 2 valores


  // handleAdd
  const handleAdd = () => {
    setCounter( counter + 1 );
    // setCounter( (c) => {return c+1} )
    // return () => console.log('Hola mundo');
  }

  const handleRest = () => {
    setCounter( counter - 1 );
  }

  const handReset = () => {
    setCounter( value )
  }

  return (
  <div>
    <h1>CounterApp</h1>
    <h2>{ counter }</h2>

    <button onClick={ handleAdd }> +1</button>
    <button onClick={ handReset }> reset</button>
    <button onClick={ handleRest }> -1</button>
  </div>)
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

export default CounterApp;