import PropTypes from 'prop-types';
// import { Fragment } from "react";

const PrimeraApp = ({ 
  saludo, 
  subtitulo
}) => {


  return (
    <div>
      <h1> { saludo } </h1>
      {/* <h1>{JSON.stringify(saludo)}</h1> */}
      <p> { subtitulo } </p>
    </div>
    
  );

}

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
  // otra: PropTypes
}

PrimeraApp.defaultProps = {
  subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;