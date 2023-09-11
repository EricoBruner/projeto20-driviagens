export function badRequestError(message) {
  return {
    type: "badRequest",
    message: message,
  };
}
