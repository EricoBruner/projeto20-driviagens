import { db } from "../database/database.js";

async function create(passengerId, flightId) {
  return await db.query(
    `INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2)`,
    [passengerId, flightId]
  );
}

export const travelsRepositories = { create };
