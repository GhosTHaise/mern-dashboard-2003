import express from "express";
import {
    getAllProperties,
    getPropertyDetail,
    createProperty,
    updateProperty,
    deleteProperty
} from "../controllers/property.controller.js";

const Router = express.Router();

Router.route("/").get(getAllProperties);
Router.route("/:id").get(getPropertyDetail);
Router.route("/").post(createProperty);
Router.route("/").patch(updateProperty);
Router.route("/").delete(deleteProperty);

export default Router;