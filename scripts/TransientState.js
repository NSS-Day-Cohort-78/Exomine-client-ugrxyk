const state = {
  selectedFacility: 0,
  selectedGovernor: 0,
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

export const setInventory = (inventory) => {
  if (state.selectedGovernor != 0) {
    let html = ""
    if ()
      for (const colonyInventory of inventory) {
              html += `<p>${colonyInventory.quantity} tons of ${colonyInventory.mineral.name}</p>`
          
      }

    return html
  }

  document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const purchaseMineral = () => {
  /*
        Does the chosen governor's colony already own some of this mineral?
            - If yes, what should happen?
            - If no, what should happen?

        Defining the algorithm for this method is traditionally the hardest
        task for teams during this group project. It will determine when you
        should use the method of POST, and when you should use PUT.

        Only the foolhardy try to solve this problem with code.
    */

  document.dispatchEvent(new CustomEvent("stateChanged"));
};
