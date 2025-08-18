import { getGovernors } from "./service/GovernorService";

export const governorDropDown = () => {
  const governorArray = getGovernors();
  const filteredGovernors = governorArray.filter(
    (governor) => governor.status === true
  );
  let dropDownHTML = `<label for="governors">Choose a governor</label>
      <select id="governors" name="governor_selector">`;

  filteredGovernors.map((governor) => {
    buttonHTML += `<option data-id=${governor.id} onClick={() => {
        setGovernor(${governor.id})
    }}>${governor.name}</option>`;
  });

  dropDownHTML += `</select>`;
  return dropDownHTML;
};
