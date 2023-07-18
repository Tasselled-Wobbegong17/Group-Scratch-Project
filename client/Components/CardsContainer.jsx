import React, { useState } from 'react';
import Cards from './Cards.jsx';
import response from '../../a-few-listings.json';
import { v4 as uuidv4 } from 'uuid';

const CardsContainer = ({ listings }) => {

  const [currentPage, setCurrentPage] = useState(1);

  if (listings && listings.length > 0) {
    const stuff = [];
    for (let i = 0, max = currentPage * 5; i < max; i++) {
      if (listings[i]) {
        stuff.push(listings[i]);
      }
      
    }

    return (
      <div className="card-container">
        {stuff.map((listing) => {
          return (
            <div className="cards-holder">
              <Cards listing={listing} />
            </div>
          );
        })}
        <button onClick={() => setCurrentPage(currentPage + 1)}>Show more</button>
      </div>
    );
  } else {
    return (
      <div className="card-container">
        <h1>No Listings Found</h1>
      </div>
    );
  }
};

export default CardsContainer;
