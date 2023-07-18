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
        limit: 20,
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
            <label className="filter-label">Filter by State (TX)</label>
            <input type="checkbox" name="filterBy" value="state_code" className="filter-checkbox"></input>
            <input type="text" name="filterBy" id="state_code" className="filter-text-field" placeholder="requried"></input><br></br>

            <label className="filter-label">Filter by City</label>
            <input type="checkbox" name="filterBy" value="city" className="filter-checkbox"></input>
            <input type="text" name="filterBy" id="city" className="filter-text-field" placeholder="requried"></input><br></br>

            <label className="filter-label">Limit Results</label>
            <input type="checkbox" name="filterBy" value="limit" className="filter-checkbox"></input>
            <input type="text" name="filterBy" id="limit" className="filter-text-field"></input><br></br>

            <label className="filter-label">Filter by Area Code</label>
            <input type="checkbox" name="filterBy" value="postal_code" className="filter-checkbox"></input>
            <input type="text" name="filterBy" id="postal_code" className="filter-text-field"></input><br></br>
            
            <label className="filter-label">Search Radius</label>
            <input type="checkbox" name="filterBy" value="radius" className="filter-checkbox"></input>
            <input type="text" name="filterBy" id="radius" className="filter-text-field"></input><br></br>
            
            <label className="filter-label">Min Bathrooms</label>
            <input type="checkbox" name="filterBy" value="baths_min" className="filter-checkbox"></input>
            <input type="text" name="filterBy" id="baths_min" className="filter-text-field"></input><br></br>

            <label className="filter-label">Min Bedrooms</label>
            <input type="checkbox" name="filterBy" value="beds_min" className="filter-checkbox"></input>
            <input type="text" name="filterBy" id="beds_min" className="filter-text-field"></input><br></br>

            <label className="filter-label">Minimum Price</label>
            <input type="checkbox" name="filterBy" value="price_min" className="filter-checkbox"></input>
            <input type="text" name="filterBy" id="price_min" className="filter-text-field"></input><br></br>

            <label className="filter-label">Maximum Price</label>
            <input type="checkbox" name="filterBy" value="price_max" className="filter-checkbox"></input>
            <input type="text" name="filterBy" id="price_max" className="filter-text-field"></input><br></br>

            <label className="filter-label">Reduced Price</label>
            <input type="checkbox" name="filterBy" value="reduced" className="filter-checkbox"></input><br></br>
          
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