import { passengersRepositories } from "../repositories/passengers.repositories.js";

async function create(firstName, lastName) {
  await passengersRepositories.create(firstName, lastName);
}

export const passengerServices = { create };
