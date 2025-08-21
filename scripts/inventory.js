// show inventory for each mineral for selected colony once governor is selected
import { getGovernors } from "./service/GovernorService.js"
import { getColonyInventory } from "./service/GovernorService.js"
import { state } from "./TransientState.js"
import { governorDropDown } from "./GovernorSelector.js"

export const showColonyInventory = async () => {
    const governors = await getGovernors()
    const colonyInventory = await getColonyInventory()
    let governorSelected = ""
    let html = "<h2>Colony Minerals</h2>"

    // document.addEventListener("stateChanged", governorDropDown)
    
    for (const governor of governors) {
        if (state.selectedGovernor === governor.id) {
            html = `<h2>${governor.colony.name} Minerals</h2>`
            governorSelected = governor
        }
    }


    for (const inventory of colonyInventory) {
        if (governorSelected.colonyId === inventory.colonyId) {
            html += `<p>${inventory.quantity} tons of ${inventory.mineral.name}</p>`
        }
        }

    return html
}


// Listen for event "stateChanged"
// When event listener is triggered, create new inventoryHTML based off of the updated state
//              (getGovernor embeds the appropriate colony)
// The function that generates the HTML should take in a parameter related to the current state (state.selectedGovernor)
