import { RequestHandler } from "express-serve-static-core";
import { TourDetail } from "../../models/shared/tourDetail";
import uuid from 'uuid/v4';
import { DataStore } from "../../data/data";
import { PublicInfo } from "../../models/shared/messages";

export const apiCreatTour: RequestHandler = (req, res, next) => {
    const newTour = {
        id: uuid(),
        location: req.body.location || "",
        tourTitle: req.body.tourTitle || "",
        tourCategory: req.body.tourCategory || "",
        tourDescription: req.body.location || "",
        price: req.body.price || "",
        currency: req.body.currency || ""
    }
    DataStore.tours.push(newTour);
    res.json(new PublicInfo("Tour created", 200));
};