import { Router } from "express";
import { flightsValidator } from "../middlewares/flights.validator.js";
import { flightsControllers } from "../controllers/flights.controller.js";
import { getFlightsValidator } from "../middlewares/get.flights.validator.js";

const flightsRouter = Router();

flightsRouter.post("/flights", flightsValidator, flightsControllers.create);
flightsRouter.get("/flights", getFlightsValidator, flightsControllers.read);

export default flightsRouter;
