import httpStatus from "http-status";

export default function errorHandler(error, req, res, next) {
  if (error.type === "error_...") return res.sendStatus(error.message);
  if (error.type === "error_...") return res.sendStatus(error.message);
  if (error.type === "error_...") return res.sendStatus(error.message);

  console.log(error);
  console.log("entrou");
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
}
