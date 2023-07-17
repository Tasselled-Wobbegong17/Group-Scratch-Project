import React from 'react';
import response from '../../a-few-listings.json'

const Filter = () => {
    // state

    //arr
    //['?radius=10', '?zip=8888']

    // onCLick submit

    const handleClick = () => {
      const arr = document.querySelectorAll('input[type="checkbox"]:checked')
     const boxValues = arr.map(checkbox => {
        return checkbox.value;
      })
    }

    return (

        <div className="filter-bar">
            <button onClick={handleClick}className="filterSubmitButton">Submit</button><br></br>
            <label for="accept">
                <label>Filter by City</label>
                <input type="checkbox" name="filterBy" value="1"></input><br></br>
            <label>Filter by Area Code</label>
                <input type="checkbox" name="filterBy" value="2"></input>
                {/* <input type="checkbox" name="filterBy" value="3"> Filter by  </input>
                <input type="checkbox" name="filterBy" value="4"> Filter by price </input>
                <input type="checkbox" name="filterBy" value="5"> Filter by price </input> */}
            </label>
        </div>
    )
}


export default Filter;




// ['state_code', STRING: 'NY'
//     'city',  STRING : 'New York City'
//     'offset', NUMBER: 0
//     'limit', NUMBER: 20
//     'postal_code', STRING
//     'radius',  NUMBER
//     'prop_type', STRING 'single_family, condo, mobile, multi_family, farm, land'
//     'baths_min', NUMBER
//     'beds_min', NUMBER
//     'reduced', STRING true/false
//     'price_min', NUMBER
//     'price_max' NUMBER
// ];