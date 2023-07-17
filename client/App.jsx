import React from 'react';
import CardsContainer from './Components/CardsContainer.jsx'
import Filter from './Components/Filter.jsx'
import LogIn from './Components/LogIn.jsx'

const App = () => {

  return (
    <div className='outer-container'>
      <div className='top-header'>
        <h3>Not Zillow</h3>
      </div>
      <LogIn/>
      <CardsContainer />
    </div>
  );
};

export default App;