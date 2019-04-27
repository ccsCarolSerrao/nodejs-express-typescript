import { RequestHandler } from "express-serve-static-core";
import { TourFilters } from "../../models/shared/tourFilters";
import { APIError } from "../../models/shared/messages";

export const apiCheckTourFilters: RequestHandler = (req, res, next) => {
    const filters = new TourFilters(req.query);
    for (let filter of Object.getOwnPropertyNames(req.query)) {
        if(!filters.hasOwnProperty(filter)) {
            next(new APIError("Query String Error", "No such filter", 400));
        }
    }
    next();
};