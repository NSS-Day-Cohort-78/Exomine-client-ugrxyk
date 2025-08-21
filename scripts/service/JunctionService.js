export const getColonyInventory = async () => {
  return fetch(
    `http://localhost:8088/colonyInventories?_expand=colony&_expand=mineral`
  ).then((res) => res.json());
};
