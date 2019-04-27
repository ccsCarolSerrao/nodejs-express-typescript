"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const v4_1 = __importDefault(require("uuid/v4"));
const messages_1 = require("../../models/shared/messages");
exports.apiCreateTour = (req, res, next) => {
    if (!req.body) {
        next(new messages_1.APIError("Data missing", "No Data in Request Body.", 400));
    }
    const newTour = {
        id: v4_1.default(),
        location: req.body.location || "",
        tourTitle: req.body.tourTitle || "",
        tourCategory: req.body.tourCategory || "",
        tourDescription: req.body.tourDescription || "",
        price: req.body.price || 0,
        currency: req.body.currency || "",
        img: []
    };
    data_1.DataStore.tours.push(newTour);
    res.json(new messages_1.PublicInfo("Tour added.", 200, { tour: newTour }));
};
