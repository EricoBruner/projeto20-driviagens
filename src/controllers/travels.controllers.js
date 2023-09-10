import httpStatus from "http-status";
import { travelsServices } from "../services/travels.services.js";

async function create(req, res) {
  const { passengerId, flightId } = req.body;

  await travelsServices.create(passengerId, flightId);
  return res.sendStatus(httpStatus.OK);
}

export const travelsControllers = { create };
