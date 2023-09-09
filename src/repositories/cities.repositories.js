import { db } from "../database/database.js";

async function create(cityName) {
  return await db.query(`INSERT INTO cities ("name") VALUES ($1);`, [cityName]);
}

async function readOneCity(cityName) {
  return await db.query(`SELECT * FROM cities WHERE name=$1;`, [cityName]);
}

export const citiesRepositories = { create, readOneCity };
