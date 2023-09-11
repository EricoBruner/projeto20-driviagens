import httpStatus from "http-status";
import { passengerServices } from "../services/passengers.services.js";

async function create(req, res) {
  const { firstName, lastName } = req.body;

  await passengerServices.create(firstName, lastName);
  return res.sendStatus(httpStatus.OK);
}

async function read(req, res) {
  const { name } = req.query;

  const passengers = await passengerServices.read(name);

  return res.status(httpStatus.OK).send(passengers);
}

export const passengerControllers = { create, read };
