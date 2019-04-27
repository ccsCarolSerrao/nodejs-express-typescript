import express from "express";
const app = express();

app.disable("x-powered-by");
app.use((req, res, next) => {
    res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE"
    })
    next();
});

import bodyparser from "body-parser";
const jsonParser = bodyparser.json();
const urlEncodedParser = bodyparser.urlencoded({ extended: true });

import { DataStore } from "./data/data";
import { apiGetTours } from "./api/tours/apiGetTours";
import { apiGetTourDetail } from "./api/tours/apiGetTourDetail";
import { apiCreateTour } from "./api/tours/apiCreateTour";
import { apiDeleteTour } from "./api/tours/apiDeleteTour";
import { apiUpdateTour } from "./api/tours/apiUpdateTour";
import { CustomRequestHandler } from "./models/express";

import morgan from "morgan";
const logger = morgan("dev");

app.use(logger);

import path from "path";
import { apiUploadImage } from "./api/tours/apiUploadImage";
import { apiErrorHandler } from "./api/general/errorHandling";
import { dateParam } from "./api/general/reqParams/dateParam";
import { apiCheckTourFilters } from "./api/tours/apiCheckTourFilters";
import { apiDowloadImage } from "./api/tours/apiDownoadImage";

app.get("/headers", (req, res, next) => res.json(req.headers));

app.use("/static", express.static(path.join(__dirname, "public", "img")));

app.get("/", (req, res, next) => {
    res.send("TourBooking API");
});

app.param("fromDate", dateParam);
app.param("toDate", dateParam);

app.get("/bookings/:fromDate/:toDate", (req, res, next) => res.json(req.params));

app.get("/tours", apiCheckTourFilters, apiGetTours);

app.get("/tours/:id", apiGetTourDetail);

app.post("/tours", jsonParser, apiCreateTour);

app.delete("/tours/:id", apiDeleteTour);

app.patch("/tours/:id", jsonParser, apiUpdateTour);

app.post("/tours/:id/img", apiUploadImage);

app.get("/static/download/:id", apiDowloadImage);

app.use(apiErrorHandler);

app.listen(process.env.PORT || 8091, () => console.log("Server Started..."));