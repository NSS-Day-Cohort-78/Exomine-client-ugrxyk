import { getGovernors, getColonyInventory } from "./service/GovernorService.js";
import {
  getFacilities,
  getFacilityInventory,
} from "./service/FacilityService.js";
import { getMinerals } from "./service/MineralService.js";

export const state = {
  selectedFacility: 0,
  selectedGovernor: 0,
  selectedMineral: 0,
};

export const setFacility = (facilityId) => {
  state.selectedFacility = facilityId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
  console.log(state);
};

export const setGovernor = (governorId) => {
  state.selectedGovernor = governorId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
  console.log(state);
};

export const setMineral = (mineralId) => {
  state.selectedMineral = mineralId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
  console.log(state);
};

export const purchaseMineral = async () => {
  // Get all required data through fetch calls
  // Reminder that in their specific fetch calls:
  //    Governor's fetch request expands to show their associated colony
  //    Facility's fetch request embeds their associated inventory
  //    Minerals is boring and just fetches minerals
  //    Both inventories fetch request expand to show their related colony/mineral or facility/mineral

  const governors = await getGovernors();
  const facilities = await getFacilities();
  const minerals = await getMinerals();
  const colonyInventory = await getColonyInventory();
  const facilityInventory = await getFacilityInventory();
  // Variables to extract and store only the relevant data from previous fetch calls matching whatever is in the current state

  let purchasingGovernor = null;
  let sellingFacility = null;
  let transactionMineral = null;

  // Variables to extract and store the specific junction data based off the previously extracted data
  let colonyInventoryJunction = null;
  let facilityInventoryJunction = null;

  // Will return true if colony inventory is found
  let foundColonyInventory = false;
  let newInventory = null;
  let postOptions = null;

  /// LOOPING to extract data based off the current state
  for (const governor of governors) {
    if (state.selectedGovernor === governor.id) {
      purchasingGovernor = governor;
    }
  }

  for (const facility of facilities) {
    if (state.selectedFacility === facility.id) {
      sellingFacility = facility;
    }
  }

  for (const mineral of minerals) {
    if (state.selectedMineral === mineral.id) {
      transactionMineral = mineral;
    }
  }

  /// LOOPING done
  /// LOOPING provide the two specific inventories required for the transactions

  for (const inventory of colonyInventory) {
    if (
      purchasingGovernor.colony[0].id === inventory.colonyId &&
      transactionMineral.id === inventory.mineralId
    ) {
      colonyInventoryJunction = inventory;
      colonyInventoryJunction.quantity++;
      foundColonyInventory = true;
      break;
    }
  }

  /// If no inventory exists, one will be created with a POST command

  if (!foundColonyInventory) {
    newInventory = {
      colonyId: purchasingGovernor.colony[0].id,
      mineralId: transactionMineral.id,
      quantity: 1,
    };
    postOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newInventory),
    };
  }

  for (const inventory of facilityInventory) {
    if (
      sellingFacility.id === inventory.miningFacilityId &&
      transactionMineral.id === inventory.mineralId
    ) {
      facilityInventoryJunction = inventory;
      facilityInventoryJunction.quantity--;
      break;
    }
  }

  const colonyInventoryPutOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(colonyInventoryJunction),
  };

  const facilityInventoryPutOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(facilityInventoryJunction),
  };

  if (foundColonyInventory === true) {
    await fetch(
      `https://localhost:8088/colonyInventories/${colonyInventoryJunction.id}`,
      colonyInventoryPutOptions
    );
  } else {
    await fetch(`https://localhost:8088/colonyInventories/`, postOptions);
  }
  await fetch(
    `https://localhost:8088/facilityMinerals/${facilityInventoryJunction.id}`,
    facilityInventoryPutOptions
  );

  document.dispatchEvent(new CustomEvent("stateChanged"));
};
