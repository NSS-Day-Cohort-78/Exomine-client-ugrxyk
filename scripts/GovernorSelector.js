import { getGovernors } from "./service/GovernorService.js";
import { setFacility, setGovernor } from "./TransientState.js";
import { getFacilities } from "./service/FacilityService.js";

const changeHandlerGovernor = (changeEvent) => {
  if (changeEvent.target.name === "governor_selector") {
    const selectedOption = changeEvent.target.selectedOptions[0];
    const chosenOption = parseInt(selectedOption.dataset.id);
    setGovernor(chosenOption);
  }
};

const changeHandlerFacility = (changeEvent) => {
  if (changeEvent.target.name === "facility_selector") {
    const selectedOption = changeEvent.target.selectedOptions[0];
    const chosenOption = parseInt(selectedOption.dataset.id);
    setFacility(chosenOption);
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

export const facilityDropDown = async () => {
  const facilityArray = await getFacilities();
  const filteredFacilities = await facilityArray.filter(
    (facility) => facility.status === true
  );

  document.addEventListener("change", changeHandlerFacility);

  let dropDownHTML = `<label for="facilities">Choose a facility</label>
      <select id="facilities" name="facility_selector">`;

  filteredFacilities.map((facility) => {
    dropDownHTML += `<option data-id="${facility.id}" value="facility">${facility.name}</option>`;
  });

  dropDownHTML += `</select>`;
  return dropDownHTML;
};
