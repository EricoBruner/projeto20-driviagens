import { db } from "../database/database.js";

async function create(origin, destination, date) {
  console.log(date);

  await db.query(
    "INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);",
    [origin, destination, date]
  );
}

export const flightsRepositories = { create };
