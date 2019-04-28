import express from "express";
const app = express();

import path from "path";
import { v1Router } from "./api/v1/v1";

app.disable("x-powered-by");

app.use("/v1", v1Router);

app.listen(process.env.PORT || 8091, () => console.log("Server Started..."));