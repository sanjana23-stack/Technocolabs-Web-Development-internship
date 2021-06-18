// Foursquare API Info
const clientId = 'N5KDGDGACPESEDBSDIUP2B5Y3RB5MSLB4VADJTQ3051FK2NP';
const clientSecret = 'T2I44UXUE2XBLYH5T4CPLPM5SPHZA0Y5CUXASSALXJMN5DVB';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info
const openWeatherKey = 'a0f5649664de61ad7c59a6ecccd822cb';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async() => {
    const city = $input.val();
    let limit = 20;
    const urlToFetch = `${url}${city}&limit=${limit}&client_id=${clientId}&client_secret=${clientSecret}&v=20200901`;
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            //console.log(response);
            const jsonResponse = await response.json();
            console.log('This is the jsonResponse for getVenues:');
            console.log(jsonResponse);
            const venues = jsonResponse.response.groups[0].items.map(parameter => parameter.venue); // accesses an array with number of obj selected in the limit param. .map() is used to return only the venue property inside these obj.
            console.log('Venues property from the jsonResponse:');
            console.log(venues);
            // Challenge: Show 4 unique venues at random
            let randomVenues = [];
            while (randomVenues.length < 4) {
                let randNum = Math.floor(Math.random() * venues.length)
                if (!randomVenues.includes(venues[randNum])) {
                    randomVenues.push(venues[randNum]);
                }
            }
            console.log('These are the 4 venues randomly chosen:');
            console.log(randomVenues);
            return randomVenues;
        }
    } catch (error) {
        console.log(error);
    }
}

const getPhotos = async() => {
    let venueId = getVenues().forEach() // something something?...
    const urlToFetch = `https://api.foursquare.com/v2/venues/${venueId}/photos?client_id=${clientId}&client_secret=${clientSecret}&v=20200901`;
    try {
        const response = await fetch(urlToFetch);
        console.log('This is the response for getPhotos:');
        console.log(response); // this is not logging anything to the console
        if (response.ok) {
            const jsonResponse = await jsonResponse.json();
            console.log('This is the jsonResponse from getPhotos:');
            console.log(jsonResponse); // this is not logging anything to the console
        }
    } catch (error) {
        console.log(error)
    }
}

const getForecast = async() => {
    const urlToFetch = `${weatherUrl}?&q=${$input.val()}&APPID=${openWeatherKey}`
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json()
                //jsonResponse is logged to the console via the helper function 
            return jsonResponse;
        }
    } catch (error) {
        console.log(error);
    }
}


// Render functions
const renderVenues = (venues) => {
    $venueDivs.forEach(($venue, index) => {
        const venue = venues[index];
        const venueIcon = venue.categories[0].icon;
        const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;

        let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);


        $venue.append(venueContent);
    });
    $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
    let weatherContent = createWeatherHTML(day);
    $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
    $venueDivs.forEach(venue => venue.empty());
    $weatherDiv.empty();
    $destination.empty();
    $container.css("visibility", "visible");
    getVenues().then(venues => renderVenues(venues));
    //getPhotos();
    getForecast().then(forecast => renderForecast(forecast));
    return false;
}

$submit.click(executeSearch)
© 2021 GitHub, Inc.