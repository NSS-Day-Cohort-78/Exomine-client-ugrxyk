// show inventory for each mineral for selected colony once governor is selected
import { setInventory } from "./TransientState.js"
import { getGovernors } from "./service/GovernorService.js"


// export const getColonyInventory = async () => {
//     const inventory = await fetch("http://localhost:8088/colonyInventories?_expand=mineral").then(res => res.json())
//     const colonyInventory = setInventory(inventory)
//     return colonyInventory

// }

document.addEventListener("stateChanged", showColonyInventory)


export const showColonyInventory = async (state) => {
    const governors = await getGovernors()
    let html = ""
    
    for (const governor of governors) {
        if (state.selectedGovernor === governor.id) {
            //HTML text
        }
    }

    let html = ""

        for (const colonyInventory of inventory) {
            // if (governorState.value != 0) {
                html += `<p>${colonyInventory.quantity} tons of ${colonyInventory.mineral.name}</p>`
            // }
        }

    return html
}

export const initializeColonyInventory = () => {
   const govDropdown = document.querySelector("#governors")

   if(govDropdown) {
    govDropdown.addEventListener("change", (event) => {
        // setGovernor(event);
        showColonyInventory(event)
    })
   }
}




// Listen for event "stateChanged"
// When event listener is triggered, create new inventoryHTML based off of the updated state
//              (getGovernor embeds the appropriate colony)
// The function that generates the HTML should take in a parameter related to the current state (state.selectedGovernor)