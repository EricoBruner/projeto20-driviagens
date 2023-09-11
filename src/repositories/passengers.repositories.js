import { db } from "../database/database.js";

async function create(firstName, lastName) {
  return await db.query(
    `INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`,
    [firstName, lastName]
  );
}

async function read(name = "") {
  return await db.query(
    `WITH result AS (
      SELECT
        COUNT(travels.id) AS travels, 
        CONCAT(pas."firstName", ' ', pas."lastName") AS passenger 
      FROM passengers AS pas
      LEFT JOIN travels ON travels."passengerId" = pas.id
      GROUP BY pas.id
    )
    
    SELECT *
    FROM result
    WHERE passenger ILIKE $1
    ORDER BY travels DESC;
    `,
    [`%${name}%`]
  );
}

async function readById(id) {
  return await db.query(`SELECT * FROM passengers WHERE id=$1`, [id]);
}

export const passengersRepositories = { create, readById, read };
