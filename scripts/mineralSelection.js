//import database 
import {database} from "./api/database.json"
//create html to show minerals (mineralsHTML) for specific facility
 export const mineralSelection = (facilityId) => {
    //find the selected facility
    const selectedFacility = database.miningFacilities.find(facility => facility.id === facilityId)
    //get all minerals available at this facility
    const facilityMinerals = database.facilityMinerals.filter(facilityMineral => facilityMineral.miningFacilityId === facilityId
    )};

    let mineralsHTML = 
    `<div class="mineral-selection">
    <h2> Facility minerals for ${selectedFacility ? selectedFacility.name : 'unknown Facility'}</h2>
    <div class="minerals-list">`
//loop through each mineral at this facility
for (const facilityMineral of facilityMinerals) {
    //find mineral details
    const mineral = database.minerals.find(minerals => minerals.id === facilityMineral.mineralID)
    //only create radio button if quanity > 0 
    if (facilityMineral.quanity > 0) {
        mineralsHTML += `
        <div class= "mineral-option">
        <input type ="radio"
                name= "mineral"
                value="${facilityMineral.id}"
                id = "mineral--${facilityMineral.id}">
            <label for= "mineral--${facilityMineral.id}">
                ${mineral.name} (${facilityMineral.quanity} tons available)
            </label>
            </div>
            `
            //show mineral but without button if quantity is 0
    } else {
        mineralsHTML += `
        <div class = mineral-option mineral-unavailable">
        <span class="unavailable-mineral">
            ${mineral.name} (Out of stock)
            </span> 
        </div>`
    }
}

mineralsHTML += `
        </div>
    </div>
`
//return mineralsHTML
return mineralsHTML
    

    
    
    
    
    


