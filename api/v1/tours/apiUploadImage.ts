import { DataStore } from "../../../data/data";
import { RequestHandler } from "express";
import * as staticFileService from "../general/static";
import { APIError, PublicInfo } from "../../../models/shared/messages";

export const apiUploadImage: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    const tourIndex = DataStore.tours.findIndex((item: any) => item.id == tourID);
    if (tourIndex == -1) {
        res.json({"status": "error", "message": "Tour not found"});
    }
    else {
        const upload = staticFileService.getFileUploader(req.app.get("env"));
        upload(req, res, (err) => {
            if (err) {
                console.log(err);
                next(APIError.errFileUplodadFailed())
            }
            else {
                DataStore.tours[tourIndex].img.push(req.file.filename);
                res.json(PublicInfo.infoFileUploaded());
            }
        });
    }
};