// TODO: get our cached database

const apiController = {};

apiController.getListings = async (req, res, next) => {
  // 'https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=NY&city=New%20York%20City&offset=0&limit=200&postal_code=72&sort=relevance&radius=10&prop_type=condo&listed_date_min=2019-08-01T16%3A24%3A40Z&baths_min=2&beds_min=3&price_min=10000&price_max=50000'
  const queryParams = ['state_code', 'city', 'offset', 'limit', 'postal_code', 'sort', 'radius', 'prop_type', 'listed_date_min', 'baths_min', 'beds_min', 'reduced', 'price_min', 'price_max'];
  console.log('getting listings');
  // Add all the queries to the api search url
  let url = `https://realty-in-us.p.rapidapi.com/properties/list-for-sale?`;
  Object.entries(req.query).forEach((pair, i, arr) => {
    if (!queryParams.includes(pair[0])) {
      console.log('Incorrect parameters given to apiController.getListings');
      return next('bad query');
    }
    url = `${url}${pair[0]}=${pair[1]}`;
    if (i != arr.length - 1) url += '&';
  });
  
  try {
    console.log(url);
    const fetchedListings = await fetch(url, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.API_TOKEN,
          'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
        }
      })
    console.log('parsing fetch json');
    const parsedListings = await fetchedListings.json();
    res.locals.listings = parsedListings;
    console.log('completed fetch, returning response: ', parsedListings)
    return next();
  }
  catch (err) {
    console.log('errored');
    return next(err);
  }
}

module.exports = apiController;