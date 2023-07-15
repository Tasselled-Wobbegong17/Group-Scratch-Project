// TODO: get our cached database

const apiController = {};

apiController.getListings = async (req, res, next) => {
  console.log('entered apiController.getListings');
  try {
    const fetchedListings = await fetch('https://realty-in-us.p.rapidapi.com/properties/v3/detail?property_id=4925893489', {
        method: 'GET',
        headers: {
          // FIX HARD CODED API KEY, PUT IN ENV
          'X-RapidAPI-Key': process.env.API_TOKEN,
          'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
        }
      })
    
    const parsedListings = await fetchedListings.json();


    console.log(parsedListings);
    res.locals.listings = parsedListings;
    return next();
  }
  catch (err) {
    return next(err);
  }
}

module.exports = apiController;