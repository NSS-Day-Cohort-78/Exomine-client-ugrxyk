import { getGovernors } from "./service/GovernorService.js";
import { setGovernor } from "./TransientState.js";

const changeHandler = (changeEvent) => {
  if (changeEvent.target.value === "governor") {
    const chosenOption = changeEvent.target.id;
    setGovernor(chosenOption);
  }
};

export const governorDropDown = async () => {
  const governorArray = await getGovernors();
  const filteredGovernors = await governorArray.filter(
    (governor) => governor.status === true
  );

  document.addEventListener("change", changeHandler);

  let dropDownHTML = `<label for="governors">Choose a governor</label>
      <select id="governors" name="governor_selector">`;

  filteredGovernors.map((governor) => {
    dropDownHTML += `<option data-id=${governor.id} data-colonyId="${governor.colony.id}" value="governor">${governor.name}</option>`;
  });

  dropDownHTML += `</select>`;
  return dropDownHTML;
};
