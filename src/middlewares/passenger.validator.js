import httpStatus from "http-status";
import { passengerSchema } from "../schemas/passengers.schemas.js";
import { schemaValidators } from "../validators/schema.validators.js";

export function passengerValidator(req, res, next) {
  const passenger = { ...req.body };

  const error = schemaValidators(passengerSchema, passenger);

  if (error) {
    return res.status(200).send(error);
  }

  next();
}
