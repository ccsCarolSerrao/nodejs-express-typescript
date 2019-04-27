import { DataStore } from "../../data/data";
import { RequestHandler } from "express";

import {TourSummary} from "../../models/shared/tourSummary";

export const apiGetTours: RequestHandler = (req, res, next) => {
    res.json(DataStore.tours.map((item: any) => new TourSummary(item)));
};