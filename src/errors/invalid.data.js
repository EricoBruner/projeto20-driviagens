export function invalidDataError() {
  return {
    type: "incompleteData",
    message: `Preencha todos os dados!`,
  };
}
