import httpStatus from "http-status";
import { flightsServices } from "../services/flights.services.js";

async function create(req, res) {
  const { origin, destination, date } = req.body;

  await flightsServices.create(origin, destination, date);

  return res.sendStatus(httpStatus.OK);
}

export const flightsControllers = { create };
