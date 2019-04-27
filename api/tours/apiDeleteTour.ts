import { DataStore } from "../../data/data";
import { PublicInfo, APIError } from "../../models/shared/messages";
import { RequestHandler } from "express-serve-static-core";

export const apiDeleteTour: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    const tourIndex = DataStore.tours.findIndex((item: any) => item.id == tourID);
    if (tourIndex > -1) {
        DataStore.tours.splice(tourIndex);
        res.json(PublicInfo.infoDeleted());
    }
    else {
        next(APIError.errNotFound())
    }
};