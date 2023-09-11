import { equalDataError } from "../errors/equal.data.js";
import { notFoundError } from "../errors/not.found.js";
import { citiesRepositories } from "../repositories/cities.repositories.js";
import { flightsRepositories } from "../repositories/flights.repositories.js";

async function create(origin, destination, date) {
  if (origin == destination) {
    throw equalDataError("Origin and destination");
  }

  const {
    rows: [origExist],
  } = await citiesRepositories.readById(origin);

  if (!origExist) throw notFoundError("Origin");

  const {
    rows: [destExist],
  } = await citiesRepositories.readById(destination);

  if (!destExist) throw notFoundError("Destination");

  const [day, month, year] = date.split("-");
  const formattedDate = new Date(`${year}-${month}-${day}`);

  await flightsRepositories.create(origin, destination, formattedDate);
}

async function read(origin, destination, smallerDate, biggerDate) {
  const { rows: flights } = await flightsRepositories.read(
    origin,
    destination,
    smallerDate,
    biggerDate
  );

  return flights;
}

export const flightsServices = { create, read };
