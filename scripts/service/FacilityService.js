// Fetches miningFacility and their current inventory

export const getFacilities = async () => {
  return fetch(
    `http://localhost:8088/miningFacilities?_embed=facilityMinerals`
  ).then((res) => res.json());
};

export const getFacilityInventory = async () => {
  return fetch(`http://localhost:8088/facilityMinerals`).then((res) =>
    res.json()
  );
};
