//Export and declare GetMineralSelection, fetch database 
export const GetMineralSelection = async (facilityId) => {
  const response = await fetch("./api/database.json");
  const database = await response.json();
  //find Selected facility
  const selectedFacility = database.miningFacilities.find(
    (facility) => facility.id === facilityId
  );
  // Get minerals for this specific facility only
  const facilityMinerals = database.facilityMinerals.filter(
    (fm) => fm.miningFacilityId === facilityId
  );

  let mineralsHTML = `
    <div class="mineral-selection">
    <h2> Facility minerals for ${
      selectedFacility ? selectedFacility.name : "unknown Facility"
    }</h2>
    <div class="minerals-list">
    `;
  //loop through each mineral at this facility
  for (const facilityMineral of facilityMinerals) {
    //find mineral details
    const mineral = database.minerals.find(
      (minerals) => minerals.id === facilityMineral.mineralId
    );
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
            `;
      //show mineral but without button if quantity is 0
    } else {
      mineralsHTML += `
        <div class ="mineral-option mineral-unavailable">
        <span class="unavailable-mineral">
            ${mineral.name} (Out of stock)
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
