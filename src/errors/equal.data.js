export function equalDataError(values) {
  return {
    type: "equalData",
    message: `${values} cannot be the equals!`,
  };
}
