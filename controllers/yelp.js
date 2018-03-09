'use strict';

const yelp = require('yelp-fusion');
// const client = yelp.client("mY2myY0InTECradUjqONHUiOCoO5doJ2B3KVkVu05hPUe0PjzHry3mEWYfKcDwTU_S0a8jxdYCbf_KviXfLSb2_1mQBk40zTCdMC4ay_ZqMw6StquuAm3Lbc6d2RWnYx");
const client = yelp.client("fWy0ShZaNSsrRNosPtLPwUAWQtcBW-TUkGVhelu6B_Md_zH6s_WJ2tQSx4YgWLZLwjP7kDLPNLJQEZvMtT4mr77jREmU7seMZRnN8M5ahtPviAxWulofyKEIueGYWnYx");


var yelpApis = {

    getYelpBusinessIDs: function (userlocation, userexperienceType, cb) {
        var yelpbusinessidsArr = [];
        client.search({
            term: userexperienceType,
            location: userlocation,
            limit: 3
        }).then(response => {
            // yelpResponseObj[userexperienceType] = [];
            for (var i = 0; i < response.jsonBody.businesses.length; i++) {
                var business_id = response.jsonBody.businesses[i].id;
                // yelpResponseObj[userexperienceType][i] = {};
                // yelpResponseObj[userexperienceType][i].businessid = business_id;
                yelpbusinessidsArr.push(business_id);
            }
            cb(yelpbusinessidsArr);
        })
    },

    getYelpData: function (yelpbusinessidsArr, experienceType, cb) {
        var yelpResponseObj = {};

        yelpResponseObj[experienceType] = [];

        // console.log('inside function getYelpData() and Length: ', yelpbusinessidsArr.length)
        var count = 0;
        for (var i = 0; i < yelpbusinessidsArr.length; i++) {
            // console.log('inside for loop getYelpData()')
            client.business(yelpbusinessidsArr[i]).then(response => {
                // console.log('inside client.business ()')
                // console.log(response.jsonBody.id, response.jsonBody.url);
                var businessDetailsObj = {};
                businessDetailsObj["businessid"] = response.jsonBody.id;
                // businessDetailsObj["openhours"] = response.jsonBody.hours[0];
                businessDetailsObj["namelink"] = response.jsonBody.url;
                businessDetailsObj["rating"] = response.jsonBody.rating;
                businessDetailsObj["imagelink"] = response.jsonBody.image_url;
                businessDetailsObj["coordinates"] = response.jsonBody.coordinates;
                yelpResponseObj[experienceType].push(businessDetailsObj);
                count++;
                // console.log(count,yelpbusinessidsArr.length);
                if (count === yelpbusinessidsArr.length) {
                    cb(yelpResponseObj);
                }
            }).catch(e => {
                console.log(e);
            });

        }
    }

}

module.exports = yelpApis;
