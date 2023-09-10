import { invalidDataError } from "../errors/invalid.data.js";
import { flightSchema } from "../schemas/flight.schemas.js";
import { schemaValidators } from "../validators/schema.validators.js";

export function flightsValidator(req, res, next) {
  const flight = { ...req.body };

  const error = schemaValidators(flightSchema, flight);

  if (error) throw invalidDataError(error);

  next();
}
