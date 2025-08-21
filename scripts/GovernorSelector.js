import { getGovernors } from "./service/GovernorService.js";
import { setGovernor } from "./TransientState.js";

const changeHandlerGovernor = (changeEvent) => {
  if (changeEvent.target.name === "governor_selector") {
    const selectedOption = changeEvent.target.selectedOptions[0];
    const chosenOption = parseInt(selectedOption.dataset.id);

    setGovernor(chosenOption);
  }
};

export const governorDropDown = async () => {
  const governorArray = await getGovernors();
  const filteredGovernors = await governorArray.filter(
    (governor) => governor.status === true
  );

  document.addEventListener("change", changeHandlerGovernor);

  let dropDownHTML = `<label for="governors">Choose a governor</label>
      <select id="governors" name="governor_selector">`;

  filteredGovernors.map((governor) => {
    dropDownHTML += `<option data-id="${governor.id}" data-colonyId="${governor.colony.id}" value="governor">${governor.name}</option>`;
  });

  dropDownHTML += `</select>`;
  return dropDownHTML;
};
