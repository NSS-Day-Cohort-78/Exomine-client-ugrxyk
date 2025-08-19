// show inventory for each mineral for selected colony once governor is selected
import { setInventory } from "./TransientState.js"



// export const getColonyInventory = async () => {
//     const inventory = await fetch("http://localhost:8088/colonyInventories?_expand=mineral").then(res => res.json())
//     const colonyInventory = setInventory(inventory)
//     return colonyInventory

// }

export const showColonyInventory = async (event) => {

    const inventory = await getColonyInventory();

    // const colonyId = parseInt(event.dataset.colonyId)

    const governorState = setGovernor();

    // document.addEventListener("click", setGovernor)

    let html = ""

        for (const colonyInventory of inventory) {
            if (governorState.value != 0) {
                html += `<p>${colonyInventory.quantity} tons of ${colonyInventory.mineral.name}</p>`
            }
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