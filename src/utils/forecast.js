const request = require('request');

const forecast= (latitude,longitude,callback)=>{

    const url = "https://api.darksky.net/forecast/d80c64e8d05833ccfc60d6452b0f92eb/"+latitude+","+longitude;

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather service.",undefined);
        } else if (body.error) {
            callback(body.error,undefined);
        }
        else {
            const data = (body.currently);
            // console.log(data.currently);
            const res=`${body.daily.data[0].summary}. It is currently ${data.temperature} degrees out, There is a ${data.precipProbability}% chance of rain.`;
            callback(undefined,res);
        }
    
    })
    
}

module.exports=forecast