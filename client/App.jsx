import React, { useState } from 'react';
import CardsContainer from './Components/CardsContainer.jsx'
import Filter from './Components/Filter.jsx'


const App = () => {

  const [listings, setListings] = useState({ listings: []});
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
      <button onClick={() => fetchListings({ state_code: 'NY', city: 'New York City', offset: 0, limit: 10 })}>Get listings</button>
      <button onClick={showModal}>Click to Show Filters</button>
      <div className='top-header'>
        <h3>Not Zillow</h3>
      </div>
      <Filter fetchListings={fetchListings}
              showFilters={showFilters} />
      <CardsContainer listings={listings} />
    </div>
  );
};

export default App;