import { Router } from "express";
import { apiGetUserDetail } from "./apiGetUserDetail";
import { apiAddUser } from "./apiAddUser";
import { apiDeleteUser } from "./apiDeleteUser";
import { apiUpdateUser } from "./apiUpdateUser";

export let userRouter = Router();

userRouter.route("/:id")
    .get(apiGetUserDetail)
    .post(apiAddUser)
    .delete(apiDeleteUser)
    .patch(apiUpdateUser);