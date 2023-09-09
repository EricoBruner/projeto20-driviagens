import { Router } from "express";
import passengerRouter from "./passengers.routes.js";
import citiesRouter from "./cities.routes.js";

const router = Router();

router.use(passengerRouter);
router.use(citiesRouter);

export default router;
