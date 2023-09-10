import { db } from "../database/database.js";

async function create(cityName) {
  return await db.query(`INSERT INTO cities ("name") VALUES ($1);`, [cityName]);
}

async function readByName(cityName) {
  return await db.query(`SELECT * FROM cities WHERE name=$1;`, [cityName]);
}

async function readById(id) {
  return await db.query(`SELECT * FROM cities WHERE id=$1;`, [id]);
}

export const citiesRepositories = { create, readByName, readById };
