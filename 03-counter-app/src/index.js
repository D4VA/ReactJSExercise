import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';


const divRoot = document.querySelector('#app');


// ReactDOM.render(<PrimeraApp saludo='Hola mundo'/>, divRoot);
ReactDOM.render(<CounterApp value={132465}/> , divRoot);
