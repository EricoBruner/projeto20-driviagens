export function notFoundError(item = item) {
  return {
    type: "notFound",
    message: `${item} not found!`,
  };
}
