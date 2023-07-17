import React from 'react';
import { v4 as uuidv4 } from 'uuid';



const Cards = ({ listing }) => {
    //state management

    // listing = {};
    const arr = [
        'address',
        'price',
        'sqft',
        'list_date',
        'beds',
        'baths'
    ]

    const Details = ({ detail }) => {

        if (detail === 'list_date') {
            const time = (new Date(`${listing[detail]}`).toLocaleString()).slice(0, 9);
            return (
                <div className='property-details' key={uuidv4()}>
                    {detail} : {time}
                </div>
            )
        }
        return (
            <div className='property-details' key={uuidv4()}>
                {detail} : {listing[detail]}
            </div>
        )
    }

    //listing.photo
    //listing.price
    //price_raw
    //sqft_raw
    //listing.beds
    //listing.baths
    //listing.sqft
    //listing.list_date
    //listing.address
    //listing.lat
    //listing.lon

    return (
        <><img src={listing.photo} key={uuidv4()}></img>
            <div className='property-info' key={uuidv4()}>
                {arr.map((el) => {
                    return (
                        <Details detail={el} />
                    )
                })}
            </div></>
    )
}


export default Cards;