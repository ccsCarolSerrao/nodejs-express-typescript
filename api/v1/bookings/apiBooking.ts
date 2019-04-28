import { Router } from "express";
import { dateParam } from "../general/reqParams/dateParam";

export let bookingRouter = Router();



bookingRouter.param("fromDate", dateParam);
bookingRouter.param("toDate", dateParam);

bookingRouter.get("/bookings/:fromDate/:toDate", (req, res, next) => res.json(req.params));