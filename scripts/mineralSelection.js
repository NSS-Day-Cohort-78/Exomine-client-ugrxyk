import { getMinerals } from "./service/MineralService.js";
import { getFacilities } from "./service/FacilityService.js";
import { state } from "./TransientState.js";
import { setMineral } from "./TransientState.js";

const minerals = await getMinerals();
const facilities = await getFacilities();

window.setMineral = setMineral;

export const GetMineralSelection = async () => {
  //find Selected facility
  const selectedFacility = facilities.find(
    (facility) => facility.id === state.selectedFacility
  );

  const mineralsArray = selectedFacility.facilityMinerals;
  const mineralArray = mineralsArray.map((object) => {
    const mineralObject = minerals.find((mineral) => {
      return mineral.id === object.mineralId;
    });
    if (mineralObject) {
      object.mineralName = mineralObject.name;
    }
    return object;
  });
  let mineralsHTML = `
      <div class="mineral-selection">
      <h2> Facility minerals for ${
        selectedFacility ? selectedFacility.name : "unknown Facility"
      }</h2>
      <div class="minerals-list">
      `;
  //loop through each mineral at this facility
  for (const mineral of mineralArray) {
    //only create radio button if quanity > 0
    if (mineral.quantity > 0) {
      mineralsHTML += `
          <div class= "mineral-option">
          <input type ="radio"
                  name= "mineral"
                  value="${mineral.mineralId}"
                  id= "mineral--${mineral.mineralId}"
                  onclick="setMineral(${mineral.mineralId})"
                  >
              <label for= "mineral--${mineral.mineralId}">
                  ${mineral.mineralName} (${mineral.quantity} tons available)
              </label>
              </div>
              `;
      //show mineral but without button if quantity is 0
    } else {
      mineralsHTML += `
          <div class ="mineral-option mineral-unavailable">
          <span class="unavailable-mineral">
              ${mineral.mineralName} (Out of stock)
              </span> 
          </div>`;
    }
  }

  mineralsHTML += `
          </div>
      </div>
  `;
  //return mineralsHTML
  return mineralsHTML;
};
