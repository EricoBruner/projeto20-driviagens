import { passengerRepositories } from "../repositories/passengers.repositories.js";

async function create(firstName, lastName) {
  await passengerRepositories.create(firstName, lastName);
}

export const passengerServices = { create };
