export function conflitDataError(item = "item") {
  return {
    type: "conflitData",
    message: `${item} already exists!`,
  };
}
