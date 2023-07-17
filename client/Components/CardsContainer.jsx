import React from 'react';
import Cards from './Cards.jsx'
// import response from '../../a-few-listings.json'

const CardsContainer = (props) => {

  if (props.listings && props.listings.length > 0) {

      return (

          <div className="card-container">
              {props.listings.map((listing) => {
                  return (
                      <div className="cards-holder">
                          <Cards listing={listing} />
                      </div>
                  )
              })}
          </div>
      )
  }
  else {
    return (
      <div className="card-container">
        <h1>No Listings Found</h1>
      </div>
    )
  }
    
}


export default CardsContainer;