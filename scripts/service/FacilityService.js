// Fetches miningFacility and their current inventory

export const getFacilities = async () => {
  return fetch(
    `http://localhost:8088/miningFacilities?_embed=miningFacilityInventory`
  ).then((res) => res.json());
};
