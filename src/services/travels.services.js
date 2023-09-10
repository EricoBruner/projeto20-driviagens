import { notFoundError } from "../errors/not.found.js";
import { flightsRepositories } from "../repositories/flights.repositories.js";
import { passengersRepositories } from "../repositories/passengers.repositories.js";
import { travelsRepositories } from "../repositories/travels.repositories.js";

async function create(passengerId, flightId) {
  const {
    rows: [passengerExist],
  } = await passengersRepositories.readById(passengerId);

  if (!passengerExist) throw notFoundError("Passenger");

  const {
    rows: [flightExist],
  } = await flightsRepositories.readById(flightId);

  if (!flightExist) throw notFoundError("Flight");

  await travelsRepositories.create(passengerId, flightId);
}

export const travelsServices = { create };
