import { getMinerals } from "./service/MineralService.js"; 
import { getFacilities } from "./service/FacilityService.js";
import { state } from "./TransientState.js";
import { setMineral } from "./TransientState.js";
 
const minerals = await getMinerals()
const facilities = await getFacilities()
const mineralsArray = facility.minerals

export const GetMineralSelection = async (facilityId) => {

    

    //find Selected facility
    const selectedFacility = facilities.find(
      (facility) => facility.id === state.selectedFacility
    );

    const mineralsArray = selectedFacility.minerals
    const mineralArray = mineralsArray.map(
        (object) => {
            const mineralObject = minerals.find((mineral) => {
                mineral.id === object.mineralId
            }) 
            if (object.mineralId === mineralObject.id) {
                return object.mineralName = mineralObject.name
            }
        }
    )
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
      if (mineral.quanity > 0) {
        mineralsHTML += `
          <div class= "mineral-option">
          <input type ="radio"
                  name= "mineral"
                  value="${mineral.id}"
                  id = "mineral--${mineral.id}">
              <label for= "mineral--${mineral.id}">
                  ${mineral.mineralName} (${mineral.quanity} tons available)
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