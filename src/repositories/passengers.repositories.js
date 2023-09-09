import { db } from "../database/database.js";

async function create(firstName, lastName) {
  console.log(firstName, lastName);

  return await db.query(
    `INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`,
    [firstName, lastName]
  );
}

export const passengerRepositories = { create };
