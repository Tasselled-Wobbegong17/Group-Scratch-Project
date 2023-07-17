import React from 'react';
import Cards from './Cards.jsx'
import response from '../../a-few-listings.json'
import { v4 as uuidv4 } from 'uuid';

const CardsContainer = () => {

    return (

        <div className="card-container">
            {response.listings.map((listing) => {
                return (
                    <div className="cards-holder" key={uuidv4()}>
                        <Cards listing={listing} />
                    </div>
                )
            })}
        </div>

    )
}


export default CardsContainer;