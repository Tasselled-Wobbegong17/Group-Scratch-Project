import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Cards = ({ listing }) => {
  const arr = ['address', 'price', 'sqft', 'list_date', 'beds', 'baths'];

  const format = (string) => {
    let fixed = string.replace(/_/g, ' ');
    let str = fixed.split(" ");
    let str2 = str.map((el) => el[0].toUpperCase() + el.substring(1)).join(' ');
    return str2;
  };


  const Details = ({ detail }) => {
    //refactor this shit sucks

    if (detail === 'list_date') {
      const time = new Date(`${listing[detail]}`).toLocaleString().slice(0, 9);
      return (
        <div className="property-details" key={uuidv4()}>
          {format(detail)} : {time}
        </div>
      );
    }
    if (detail === 'address') {
      const addy = listing[detail] + ', ' + listing.address_new.state;
      return (
        <div className="property-details" key={uuidv4()}>
          {format(detail)}: {addy}
        </div>
      );
    }
    return (
      <div className="property-details" key={uuidv4()}>
        {format(detail)}: {listing[detail]}
      </div>
    );
  };

  //listing.address_new.state

  return (
    <>
      <img src={listing.photo} alt="Could not load image" className="cards-image"></img>
      <div className="property-info">
        {arr.map((el) => {
          return <Details detail={el} />;
        })}
      </div>
    </>
  );

};

export default Cards;
