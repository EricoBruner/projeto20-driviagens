import joiImport from "joi";
import joiDate from "@joi/date";
const joi = joiImport.extend(joiDate);

export const flightSchema = joi.object({
  origin: joi.number().positive().required(),
  destination: joi.number().positive().required(),
  date: joi.date().min("now").format("DD-MM-YYYY").required(),
});
