import React from 'react';


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

    //

    // var time=new Date('2010-01-13T18:31:16Z').toLocaleString();

    const Details = ({ detail }) => { //refactor 
        
        if (detail === 'list_date') {
            const time = (new Date(`${listing[detail]}`).toLocaleString()).slice(0, 9);
            return (
                <div className='property-details'>
                    {detail} : {time}
                </div>
            )
        }
        return (
            <div className='property-details'>
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
        <><img src={listing.photo}></img>
            <div className='property-info'>
                {arr.map((el) => {
                    return (
                        <Details detail={el} />
                    )
                })}
            </div></>
    )
}


export default Cards;