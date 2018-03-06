
'use strict';
 
const yelp = require('yelp-fusion');
const client = yelp.client("mY2myY0InTECradUjqONHUiOCoO5doJ2B3KVkVu05hPUe0PjzHry3mEWYfKcDwTU_S0a8jxdYCbf_KviXfLSb2_1mQBk40zTCdMC4ay_ZqMw6StquuAm3Lbc6d2RWnYx");
//include fs package and write it to a file
var fs = require("fs"); //do npm install
var express = require("express");
var router = express.Router();



let xp = "food";
let loc = "San Francisco";


var yelpSearch = {
	experience: xp,
	location: loc
}
var businesses = [];


client.search({
  term: yelpSearch.experience,
  location: yelpSearch.location,
  limit:2
}).then(response => {
 // console.log(JSON.stringify(response))
 for (var i=0; i < response.jsonBody.businesses.length; i++){
 	businesses.push(response.jsonBody.businesses[i].id);
 	//return two business names
 	console.log(response.jsonBody.businesses[i].id);
 }
 fs.writeFile('./message.json', JSON.stringify(response.jsonBody.businesses[0].id), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
for (var i=0; i < businesses.length; i++){
client.business(businesses[i]).then(response => {
    console.log(response.jsonBody.hours[0]);
    console.log(response.jsonBody.url);
    console.log(response.jsonBody.rating);
    //image for restaurant
    console.log(response.jsonBody.image_url);
    //coordinates for google places
    console.log(response.jsonBody.coordinates);

    var mapUrl = "https://www.google.com/maps/?q="+response.jsonBody.coordinates.latitude+","+response.jsonBody.coordinates.longitude;
    	console.log(mapUrl);

  }).catch(e => {
    console.log(e);
  });
}



});
});
router.post('/submitform', function (req, res))
module.exports=router;

// var p = $("<p>");
// p.html(response);
//TO DO: PASS response.jsonBody.coordinates into getPics function
// getPics();

//  function getPics() {
//    var youtubeURL;
//    $.ajax({
//      //replace avemaria with favorite song submission from form
//      url: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=AIzaSyD7je4aNkxUVARwlF5YOCG_DJQ5gbUENDo",
//      type: 'GET',
//      contentType: "application/json; charset=utf-8",
//      dataType: "json"
//    }).done(function (data) {
//      //console.log(data);
//      //console.log("youTube video ID: " + data.items[0].id.videoId);
//      //youtubeURL = "https://www.youtube.com/embed/" + data.items[0].id.videoId;

//      console.log("youTube complete URL: " + youtubeURL);
//      //$("#faveVideo").attr("src",youtubeURL);
//    }).done(function () {
//      console.log("youTube complete URL: " + youtubeURL);
//      $("#faveVideo").attr("src", youtubeURL);
//      $('#song_title').text();
//    })
//  }
