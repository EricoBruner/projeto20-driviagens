import { db } from "../database/database.js";

async function create(firstName, lastName) {
  return await db.query(
    `INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`,
    [firstName, lastName]
  );
}

async function readById(id) {
  return await db.query(`SELECT * FROM passengers WHERE id=$1`, [id]);
}

export const passengersRepositories = { create, readById };
