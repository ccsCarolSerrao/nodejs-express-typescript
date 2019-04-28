
import path from "path";
import express from "express";
import { Router } from "express";
import { logger } from "./general/logging";
import { apiCors } from "./general/cors";
import { apiValidation } from "./general/validation";
import { userRouter } from "./users/apiUsers";
import { tourRouter } from "./tours/apiTuors";
import { bookingRouter } from "./bookings/apiBooking";
import { apiDowloadImage } from "./tours/apiDownoadImage";
import { apiErrorHandler } from "./general/errorHandling";

export let v1Router = Router();

v1Router.use(logger);

v1Router.use(apiCors);

v1Router.use(apiValidation);

v1Router.use("/static", express.static(path.join(__dirname, "public", "img")));

v1Router.get("/", (req, res, next) => {
    res.send("TourBooking API");
});

v1Router.use("/users", userRouter);
v1Router.use("/tours", tourRouter);
v1Router.use("/bookings", bookingRouter);

v1Router.get("/static/download/:id", apiDowloadImage);

v1Router.use(apiErrorHandler);
