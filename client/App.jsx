import React, { useState } from 'react';
import CardsContainer from './Components/CardsContainer.jsx'
import Filter from './Components/Filter.jsx'
import LogIn from './Components/LogIn.jsx'
import response from '../a-few-listings.json'


const App = () => {

  const [listings, setListings] = useState(response.listings);
  const [showFilters, setShowFilters] = useState(false);

  const showModal = () => {
    return showFilters ? setShowFilters(false) : setShowFilters(true); 
  }

  function fetchListings(queries) {
    let url = '/api/listings?';
    Object.entries(queries).forEach((pair, i, arr) => {
      url += `${pair[0]}=${pair[1]}`;
      if (i != arr.length - 1) url += '&';
    })
    console.log(url);
    fetch(url)
      .then(response => {
        console.log('parsing response');
        console.log(response);
        return response.json()
      })
      .then(data => {
        setListings(data)
      })
      .catch(err => console.log('Error occured in App.jsx fetchListings: ' + err));
  }

  return (
    <div className='outer-container'>
      
      <div className='top-header'>
        <h3>Not Zillow</h3>
      </div>
      <LogIn/>
      <button onClick={showModal} id="filter-button" >{showFilters ? 'Click to Hide Filters' : 'Click to Show Filters'}</button>
      <Filter fetchListings={fetchListings}
              showFilters={showFilters} />
      <CardsContainer listings={listings} />
    </div>
  );
};

export default App;