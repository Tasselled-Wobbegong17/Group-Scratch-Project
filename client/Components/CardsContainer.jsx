import React from 'react';
import Cards from './Cards.jsx'
import response from '../../a-few-listings.json'

const CardsContainer = () => {


    console.log(response.listings);

    return (

        <div className="card-container">
            {response.listings.map((listing) => {
                return (
                    <div className="cards-holder">
                        <Cards listing={listing} />
                    </div>
                )
            })}
        </div>

    )
}


export default CardsContainer;