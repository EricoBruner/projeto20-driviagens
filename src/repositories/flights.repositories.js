import { db } from "../database/database.js";

async function create(origin, destination, date) {
  await db.query(
    "INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);",
    [origin, destination, date]
  );
}

async function readById(id) {
  return await db.query(
    `SELECT id, origin, destination, to_char(date, 'DD-MM-YYYY') AS date FROM flights WHERE id=$1`,
    [id]
  );
}

export const flightsRepositories = { create, readById };
