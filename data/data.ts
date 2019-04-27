const jsonTours = require("./tours.json");
const jsonReviews = require("./reviews.json");

export class DataStore {
    static tours = jsonTours;
    static reviews = jsonReviews;
}