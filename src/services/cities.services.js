import { conflitDataError } from "../errors/conflit.data.js";
import { citiesRepositories } from "../repositories/cities.repositories.js";

async function create(cityName) {
  const {
    rows: [cityExist],
  } = await citiesRepositories.readByName(cityName);

  if (cityExist) throw conflitDataError(cityExist.name);

  await citiesRepositories.create(cityName);
}

export const citiesServices = { create };
