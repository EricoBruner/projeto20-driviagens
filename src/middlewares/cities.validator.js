import { invalidDataError } from "../errors/invalid.data.js";
import { citiesSchema } from "../schemas/cities.schemas.js";
import { schemaValidators } from "../validators/schema.validators.js";

export function citiesValidator(req, res, next) {
  const cityName = { ...req.body };

  const error = schemaValidators(citiesSchema, cityName);

  if (error) throw invalidDataError(error);

  next();
}
