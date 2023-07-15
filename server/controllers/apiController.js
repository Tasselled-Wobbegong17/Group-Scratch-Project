// TODO: get our cached database

const apiController = {};

apiController.getListings = async (req, res, next) => {
  const url = `https://realty-in-us.p.rapidapi.com/properties/list-for-sale?`;
  const { state_code, city, postal_code, radius, prop_type, listed_date_min, baths_min, beds_min, reduced, price_min, price_max } = req.query;
  const offset = 0, limit = 20;
  try {
    
    // const fetchedListings = await fetch('https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=NY&city=New%20York%20City&offset=0&limit=200&postal_code=72&sort=relevance&radius=10&prop_type=condo&listed_date_min=2019-08-01T16%3A24%3A40Z&baths_min=2&beds_min=3&price_min=10000&price_max=50000', {
    //     method: 'GET',
    //     headers: {
    //       // FIX HARD CODED API KEY, PUT IN ENV
    //       'X-RapidAPI-Key': process.env.API_TOKEN,
    //       'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    //     }
    //   })
    
    // const parsedListings = await fetchedListings.json();
    console.log(city);
    const parsedListings = `${url}state_code=${city}`
    res.locals.listings = parsedListings;
    return next();
  }
  catch (err) {
    console.log('errored');
    return next(err);
  }
}

module.exports = apiController;