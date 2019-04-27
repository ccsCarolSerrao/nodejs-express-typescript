import { DataStore } from "../../data/data";
import { RequestHandler } from "express";

import uuid from "uuid/v4";
import { APIError, PublicInfo } from "../../models/shared/messages";

export const apiCreateTour: RequestHandler = (req, res, next) => {
    console.log(!req.body);
    if (!req.body) {
        next(APIError.errMissingBody())
    }
    const newTour = {
        id: uuid(),
        location: req.body.location || "",
        tourTitle: req.body.tourTitle || "",
        tourCategory: req.body.tourCategory || "",
        tourDescription: req.body.tourDescription || "",
        price: req.body.price || 0,
        currency: req.body.currency || "",
        img: []
    }
    DataStore.tours.push(newTour);

    const msg = PublicInfo.infoCreated({tour: newTour});
    res.status(msg.status).json(msg);    
};