import { badRequestError } from "../errors/bad.request.js";
import { invalidDataError } from "../errors/invalid.data.js";
import { getFlightSchema } from "../schemas/flight.schemas.js";
import { schemaValidators } from "../validators/schema.validators.js";

export function getFlightsValidator(req, res, next) {
  const { "bigger-date": biggerDate, "smaller-date": smallerDate } = req.query;

  if ((!biggerDate && smallerDate) || (biggerDate && !smallerDate)) {
    throw invalidDataError(
      "Bigger-date and smaller-date must be spent together!"
    );
  }

  if (biggerDate && smallerDate) {
    const error = schemaValidators(getFlightSchema, {
      smallerDate,
      biggerDate,
    });

    if (error) throw invalidDataError(error);
  }

  if (new Date(smallerDate) > new Date(biggerDate)) {
    throw badRequestError("Smaller-date cannot be greater than bigger-date");
  }

  next();
}
