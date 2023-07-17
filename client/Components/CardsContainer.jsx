import React from 'react';
import Cards from './Cards.jsx'
<<<<<<< HEAD
import response from '../../a-few-listings.json'
import { v4 as uuidv4 } from 'uuid';
=======
// import response from '../../a-few-listings.json'
>>>>>>> dev

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
<<<<<<< HEAD

        <div className="card-container">
            {response.listings.map((listing) => {
                return (
                    <div className="cards-holder" key={uuidv4()}>
                        <Cards listing={listing} />
                    </div>
                )
            })}
        </div>

=======
      <div className="card-container">
        <h1>No Listings Found</h1>
      </div>
>>>>>>> dev
    )
  }
    
}


export default CardsContainer;