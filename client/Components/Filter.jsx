import React from 'react';
import response from '../../a-few-listings.json'

const Filter = () => {
    // state

    //arr
    //['?radius=10', '?zip=8888']

    // onCLick submit

    //const arr = qeuerySelectorALl('input[name="filterBy"]:checked')

    // arr.forEach(el)      queryStr+=el.value
    const arr = document.querySelectorAll('input[name="filterBy"]:checked')

    const checkboxes = arr.forEach(checkbox => {
        console.log(checkbox.value);
    })

    return (

        <div className="filter-bar">
            <button>Submit</button>
            <label for="accept">
                <input type="checkbox" name="filterBy" value="1"> Filter by price </input>
                <input type="checkbox" name="filterBy" value="2"> Filter by price </input>
                <input type="checkbox" name="filterBy" value="3"> Filter by price </input>
                <input type="checkbox" name="filterBy" value="4"> Filter by price </input>
                <input type="checkbox" name="filterBy" value="5"> Filter by price </input>
            </label>
        </div>

    )
}


export default Filter;




// ['state_code', 
// 'city', 'offset',
//     'limit',
//     'postal_code',
//     'sort',
//     'radius',
//     'prop_type',
//     'listed_date_min',
//     'baths_min',
//     'beds_min',
//     'reduced',
//     'price_min',
//     'price_max'
// ];