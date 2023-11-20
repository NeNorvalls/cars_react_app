import React from 'react';
import CarList from '../CarList/CarList';
import cars from '../../data/car';
import s from './App.module.css';

const App = () => (
  <div className={s.appContainer}>
    <CarList cars={cars} />

    <p id={s.portfolioText}>
      Click here to go back to PortFolio!
      <a
        href="https://nenorvalls-portfolio.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className={s.portfolioLink} 
      >
        Portfolio
      </a>.
    </p>
  </div>
);

export default App;
