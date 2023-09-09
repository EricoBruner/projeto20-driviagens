import { Router } from "express";
import { citiesValidator } from "../middlewares/cities.validator.js";
import { citiesControllers } from "../controllers/cities.controllers.js";

const citiesRouter = Router();

citiesRouter.post("/cities", citiesValidator, citiesControllers.create);

export default citiesRouter;
