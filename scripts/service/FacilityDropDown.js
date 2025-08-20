import { setFacility } from "../TransientState.js";
import { getFacilities } from "./service/FacilityService.js";

const changeHandlerFacility = (changeEvent) => {
  if (changeEvent.target.name === "facility_selector") {
    const selectedOption = changeEvent.target.selectedOptions[0];
    const chosenOption = selectedOption.dataset.id;
    setFacility(chosenOption);
  }
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
