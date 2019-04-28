import { Router } from "express";
import { apiCheckTourFilters } from "./apiCheckTourFilters";
import { apiGetTourDetail } from "./apiGetTourDetail";
import { apiCreateTour } from "./apiCreateTour";
import { apiGetTours } from "./apiGetTours";
import { apiDeleteTour } from "./apiDeleteTour";
import { apiUpdateTour } from "./apiUpdateTour";
import { apiUploadImage } from "./apiUploadImage";
import { apiDowloadImage } from "./apiDownoadImage";
import { jsonParser } from "../general/bodyParser";


export let tourRouter = Router();

tourRouter.route("/")
    .get(apiCheckTourFilters, apiGetTours)
    .post(jsonParser, apiCreateTour);

tourRouter.route("/")
    .get(apiGetTourDetail)
    .delete(apiDeleteTour)
    .patch(jsonParser, apiUpdateTour)

tourRouter.route("/:id/img")
    .post(apiUploadImage);