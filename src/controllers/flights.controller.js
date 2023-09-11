import httpStatus from "http-status";
import { flightsServices } from "../services/flights.services.js";

async function create(req, res) {
  const { origin, destination, date } = req.body;

  await flightsServices.create(origin, destination, date);

  return res.sendStatus(httpStatus.OK);
}

async function read(req, res) {
  const {
    origin,
    destination,
    "smaller-date": smallerDate,
    "bigger-date": biggerDate,
  } = req.query;

  const flights = await flightsServices.read(
    origin,
    destination,
    smallerDate,
    biggerDate
  );

  return res.status(httpStatus.OK).send(flights);
}

export const flightsControllers = { create, read };
