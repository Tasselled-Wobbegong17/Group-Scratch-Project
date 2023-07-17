import React from 'react';
import response from '../../a-few-listings.json'

const Filter = ({ showFilters, fetchListings }) => {
    // state

    //arr
    //['?radius=10', '?zip=8888']

    // onCLick submit

    const handleClick = () => {
      const arr = document.querySelectorAll('input[type="checkbox"]:checked')
      const fetchQueries = {
        state_code: 'NY',
        city: 'New York City',
        offset: 0,
        limit: 5,
      };

      for (let i = 0; i < arr.length; i++) {
        const textInput = document.getElementById(arr[i].value);

        if (textInput) {
          if (textInput.value === '') {
            alert('All checked fields must be filled')
            return;
          }
          else {
            fetchQueries[arr[i].value] = textInput.value;
          }
        }
        else {
          fetchQueries[arr[i].value] = true;
        }
      }

      fetchListings(fetchQueries);
    }
      
    
 if (showFilters) {
    return (

        <div className="filter-bar">
            <label>Filter by State</label>
            <input type="checkbox" name="filterBy" value="state_code"></input>
            <input type="text" name="filterBy" id="state_code"></input><br></br>

            <label>Filter by City</label>
            <input type="checkbox" name="filterBy" value="city"></input>
            <input type="text" name="filterBy" id="city"></input><br></br>

            <label>Filter by Area Code</label>
            <input type="checkbox" name="filterBy" value="postal_code"></input>
            <input type="text" name="filterBy" id="postal_code"></input><br></br>
          
            <button onClick={handleClick}className="filterSubmitButton">Submit</button><br></br>
        </div>
    )
 }
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