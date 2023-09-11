export function internalServerError(message) {
  return {
    type: "internalServer",
    message: message,
  };
}
