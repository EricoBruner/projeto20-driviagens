import { Router } from "express";
import { passengerControllers } from "../controllers/passengers.controllers.js";
import { passengerValidator } from "../middlewares/passenger.validator.js";

const passengerRouter = Router();

passengerRouter.post(
  "/passengers",
  passengerValidator,
  passengerControllers.create
);
passengerRouter.get("/passengers", passengerControllers.read);

export default passengerRouter;
