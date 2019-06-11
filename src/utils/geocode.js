const request = require('request');
const geocode = (address, callback) => {

    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+ ".json?access_token=pk.eyJ1IjoiYWRpdGlqYWluNTY0IiwiYSI6ImNqd2pnc3QxYzBqdXk0Y242dHBscTgzbmgifQ.3Dd5a9CJFLwFK7JZ0e_aKQ&limit=1";

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback("Unable to connect to service",undefined);
        } else if (body.features.length == 0) {
            callback("Please provide correct location. Try another search",undefined);
        }
        else {
            const coordinates = body.features[0].center;
            const data = {
                longitude: coordinates[0],
                latitude : coordinates[1],
                location : body.features[0].place_name
            }
            callback(error,data);

        }
    })
}


module.exports=geocode