"use strict";
//Exercise:39
// City Names: Write a function called city_country() that takes in the name of a city and its country. 
// The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `${city}, ${country}`;
}
//calling the function with three city-country pairs:
console.log(city_country("Madinah", "Saudi Arabia"));
console.log(city_country("Multan", "Pakistan"));
console.log(city_country("Dubai", "UAE"));
