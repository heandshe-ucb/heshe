'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client("mY2myY0InTECradUjqONHUiOCoO5doJ2B3KVkVu05hPUe0PjzHry3mEWYfKcDwTU_S0a8jxdYCbf_KviXfLSb2_1mQBk40zTCdMC4ay_ZqMw6StquuAm3Lbc6d2RWnYx");
//include fs package and write it to a file
var fs = require("fs"); //do npm install
var express = require("express");
var router = express.Router();
var heandshe = require("../models/heandshe.js");
console.log(heandshe.oneusersearch());
// let xp = "food";
// let loc = "San Francisco";


// var yelpSearch = {
// 	experience: xp,
// 	location: loc
// }
// var businesses = [];


// client.search({
//   term: yelpSearch.experience,
//   location: yelpSearch.location,
//   limit:3
// }).then(response => {
//  // console.log(JSON.stringify(response))
//  for (var i=0; i < response.jsonBody.businesses.length; i++){
//  	businesses.push(response.jsonBody.businesses[i].id);
//  	//return two business names
//  	console.log(response.jsonBody.businesses[i].id);
//  }
//  fs.writeFile('./message.json', JSON.stringify(response.jsonBody.businesses[0].id), (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// for (var i=0; i < businesses.length; i++){
// client.business(businesses[i]).then(response => {
//     console.log("TEST"+ businesses[0]);
//     console.log(response.jsonBody.hours[0]);
//     console.log(response.jsonBody.url);
//     console.log(response.jsonBody.rating);
//     //image for restaurant
//     console.log(response.jsonBody.image_url);
//     //coordinates for google places
//     console.log(response.jsonBody.coordinates);
//    $('#exp1option1').text(businesses[0]);
//    //$("#exp1option1").attr("h1", "TEST");
//     var mapUrl = "https://www.google.com/maps/?q="+response.jsonBody.coordinates.latitude+","+response.jsonBody.coordinates.longitude;
//     	console.log(mapUrl);

//   }).catch(e => {
//     console.log(e);
//   });
// }

// });
// });
