import React from 'react';
import CardsContainer from './Components/CardsContainer.jsx'


const App = () => {

  return (
    <div className='outer-container'>
      <div className='top-header'>
        <h1>Not Zillow</h1>
      </div>
      <CardsContainer />
    </div>
  );
};

export default App;