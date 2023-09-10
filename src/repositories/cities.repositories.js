import { db } from "../database/database.js";

async function create(cityName) {
  return await db.query(`INSERT INTO cities ("name") VALUES ($1);`, [cityName]);
}

async function readCityByName(cityName) {
  return await db.query(`SELECT * FROM cities WHERE name=$1;`, [cityName]);
}

async function readCityById(id) {
  return await db.query(`SELECT * FROM cities WHERE id=$1;`, [id]);
}

export const citiesRepositories = { create, readCityByName, readCityById };
