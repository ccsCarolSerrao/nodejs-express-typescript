import { DataStore } from "../../data/data";
import { RequestHandler } from "express";
import { APIError, PublicInfo } from "../../models/shared/messages";

export const apiUpdateTour: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    const tourIndex = DataStore.tours.findIndex((item: any) => item.id == tourID);
    if (tourIndex > -1) {
        const originalTour = DataStore.tours[tourIndex];
        const newTour = {
            id: tourID,
            location: req.body.location || originalTour.location,
            tourTitle: req.body.tourTitle || originalTour.tourTitle,
            tourCategory: req.body.tourCategory || originalTour.tourCategory,
            tourDescription: req.body.tourDescription || originalTour.tourDescription,
            price: req.body.price || originalTour.price,
            currency: req.body.currency || originalTour.currency,
            img: originalTour.img
        }
        DataStore.tours[tourIndex] = newTour;
        res.json(PublicInfo.infoUpdated());
    }
    else {
        next(APIError.errNotFound())
    }
};