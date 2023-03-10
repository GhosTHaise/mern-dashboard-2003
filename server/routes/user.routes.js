import express from "express";

import {
    getAllUsers,
    createUser,
    getUserInfoByID
} from "../controllers/user.controller.js"

const Router = express.Router();

Router.route("/").get(getAllUsers);
Router.route("/").post(createUser);
Router.route("/:id").post(getUserInfoByID);

export default Router;