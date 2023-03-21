import express from "express";

import {
    getAllUsers,
    createUser,
    getUserInfoByID
} from "../controllers/user.controller.js"

const Router = express.Router();

Router.route("/").get(getAllUsers);
Router.route("/").post(createUser);
Router.route("/:id").get(getUserInfoByID);

export default Router;