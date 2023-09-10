import { Router } from "express";
import { travelsControllers } from "../controllers/travels.controllers.js";

const travelsRouter = Router();

travelsRouter.post("/travels", travelsControllers.create);

export default travelsRouter;
