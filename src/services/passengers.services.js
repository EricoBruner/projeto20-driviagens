import { internalServerError } from "../errors/internal.server.js";
import { passengersRepositories } from "../repositories/passengers.repositories.js";

async function create(firstName, lastName) {
  await passengersRepositories.create(firstName, lastName);
}

async function read(name) {
  const { rows: passengers } = await passengersRepositories.read(name);

  if (passengers.length > 10) {
    throw internalServerError("Too many results");
  }

  return passengers;
}

export const passengerServices = { create, read };
