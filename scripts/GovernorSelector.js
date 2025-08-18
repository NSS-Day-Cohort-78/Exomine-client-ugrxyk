import { getGovernors } from "./service/GovernorService.js";
import { setFacility, setGovernor } from "./TransientState.js";
import { getFacilities } from "./service/FacilityService.js";

const changeHandlerGovernor = (changeEvent) => {
  if (changeEvent.target.value === "governor") {
    const chosenOption = changeEvent.target.id;
    setGovernor(chosenOption);
  }
};

const changeHandlerFacility = (changeEvent) => {
  if (changeEvent.target.value === "facility") {
    const chosenOption = changeEvent.target.id;
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
    dropDownHTML += `<option data-id=${governor.id} data-colonyId="${governor.colony.id}" value="governor">${governor.name}</option>`;
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
    dropDownHTML += `<option data-id=${facility.id} value="facility">${facility.name}</option>`;
  });

  dropDownHTML += `</select>`;
  return dropDownHTML;
};
