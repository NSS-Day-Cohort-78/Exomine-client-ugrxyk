// Fetches governors, their associated colony and the colony's associated inventories.

export const getGovernors = async () => {
  await fetch(`http://localhost:8088/governors?_expand=colony`).then((res) =>
    res.json()
  );
};

export const getColonyInventory = async () => {
  await fetch(`http://localhost:8088/colonyInventory?_embed=colony`);
};
