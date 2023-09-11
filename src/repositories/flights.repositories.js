import { db } from "../database/database.js";

async function create(origin, destination, date) {
  await db.query(
    "INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);",
    [origin, destination, date]
  );
}

async function read(origin = "", destination = "", smallerDate, biggerDate) {
  if (smallerDate) {
    smallerDate = smallerDate.split("-").reverse().join("-");
    biggerDate = biggerDate.split("-").reverse().join("-");
  }

  const params = smallerDate
    ? [`%${origin}%`, `%${destination}%`, smallerDate, biggerDate]
    : [`%${origin}%`, `%${destination}%`];

  const query = smallerDate
    ? `AND date >= $3::date 
       AND date <= $4::date`
    : "";

  return await db.query(
    `SELECT 
      flights.id, 
      origins.name AS origin, 
      destinations.name AS destination, 
      to_char(flights.date, 'DD-MM-YYYY') AS date 
    FROM flights
    JOIN cities AS origins ON flights.origin = origins.id
    JOIN cities AS destinations ON flights.destination = destinations.id
    WHERE 
      origins.name ILIKE $1 
      AND 
      destinations.name ILIKE $2
      ${query}
    ORDER BY date;`,
    params
  );
}

async function readById(id) {
  return await db.query(
    `SELECT id, origin, destination, to_char(date, 'DD-MM-YYYY') AS date FROM flights WHERE id=$1;`,
    [id]
  );
}

export const flightsRepositories = {
  create,
  read,
  readById,
};
