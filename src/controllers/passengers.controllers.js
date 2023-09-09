import httpStatus from "http-status";
import { passengerServices } from "../services/passengers.services.js";

async function create(req, res) {
  const { firstName, lastName } = req.body;

  await passengerServices.create(firstName, lastName);
  return res.sendStatus(httpStatus.OK);
}

export const passengerControllers = { create };
