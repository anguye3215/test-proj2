const express = require('express');
const app = express();
const port = 8080;

//app.get('/', (req, res) => res.send('Updated change 3:13pm'));

app.get('/', (req, res) => {
    res.write('Updated change 3:13pm');
    res.write("Breakfast Menu");
    for (const element of bf) {
        res.write(element);
    };
    res.end();
});


//console.log("Hello")


//breakfast foods
let bf = [
    "Ham and Cheddar Omlette",
    "Steak and Eggs",
    "French Toast",
    "Breakfast Wrap",
    "Bagel"
]


//lunch appetizers 
let la = [
    "Calamari",
    "Crab Dip",
    "Lobster Bisque"
]


//lunch entrees
let le = [
    "Double Smashburger",
    "New York Steak Sandwich",
    "Blackened Salmon Cajun Pasta",
    "Caesar Salad",
    "Lobster Roll"
]


//dinner appetizers
let da = [

    "Smoked Nachos Grande",
    "Buffalo Shrimp Skewers",
    "French Onion Soup",
    "Maine Lobster Bisque"
]


//dinner entrees
let de = [
    "14 Oz Ribeye",
    "Bacon Wrapped Filet Mignon",
    "Porterhouse Steak",
    "King Salmon",
    "Lobster Mac & Cheese"
];


//desert
let desert = [
    "Buttercream Cake",
    "Banana Walnut",
    "Shortbread Cookie",
    "Ice Cream"
];

//alcoholic drinks
let alcDrinks = [
    "Gin & Tonic",
    "Manhattan",
    "Mai Tai",
    "Appletini",
    "Margarita"
];

//non-alcoholic drinks
let nonAlcDrinks = [
    "Orange Juice",
    "Mango Juice",
    "Tropical Juice",
    "Lemon-Tea"
];


alert("Breakfast Menu");
for (const element of bf) {
    alert(element);
}


app.listen(port);
console.log(`App running on http://localhost:${port}`);