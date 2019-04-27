import { RequestHandler } from "express";
import path from "path";
import { APIError } from "../../models/shared/messages";

export const apiDowloadImage: RequestHandler = (req, res, next) => {
    const fileID = req.params.id;
    res.download(path.resolve("./", "public", "image", fileID), err => {
        if(err) {
            next(APIError.errNotFound())
        }
    });
}