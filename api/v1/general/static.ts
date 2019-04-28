import { RequestHandler } from "express";
import multer from "multer";
import path from "path";
import uuid from "uuid/v4";
import { __root } from "../../../config";

export function getStaticHome(env: string) {
    switch(env) {
        case "development":
            return "http://localhost:8091/v1/static/";
        case "production":
        //...CDN...
    }
}

export function fileMapper(env: string): (filename: string) => string {
    return (filename) => getStaticHome(env) + filename;
}

export function getFileUploader(env: string): RequestHandler {
    switch(env) {
        case "development":
            const fileID = uuid();
            const fileStore = multer.diskStorage({
                destination: function(req, file, callback) {
                    callback(null, path.join(__root, "public", "img"));
                },
                filename: function(req, file, callback) {
                    callback(null, fileID + path.extname(file.originalname));
                }
            });
            return multer({storage: fileStore}).single("file");
        // case "production"
        default:
            return (req, res, next) => next()
    }
}