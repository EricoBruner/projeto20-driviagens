export function invalidDataError(message) {
  return {
    type: "invalidData",
    message: message,
  };
}
