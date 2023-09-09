import httpStatus from "http-status";
import { passengerServices } from "../services/passengers.services.js";

async function create(req, res) {
  const { firstName, lastName } = req.body;

  await passengerServices.create(firstName, lastName);
  return res.sendStatus(200);
}

export const passengerControllers = { create };
