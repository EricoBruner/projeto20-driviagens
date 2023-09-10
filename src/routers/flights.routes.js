import { Router } from "express";
import { flightsValidator } from "../middlewares/flights.validator.js";
import { flightsControllers } from "../controllers/flights.controller.js";

const flightsRouter = Router();

flightsRouter.post("/flights", flightsValidator, flightsControllers.create);

export default flightsRouter;
