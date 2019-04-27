"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const tourSummary_1 = require("../../models/shared/tourSummary");
exports.apiGetTours = (req, res, next) => {
    res.json(data_1.DataStore.tours.map((item) => new tourSummary_1.TourSummary(item)));
};
