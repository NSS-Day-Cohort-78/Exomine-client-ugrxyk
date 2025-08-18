// fetch colony inventory
export const colonyInventory = async (event) => {
    const inventory = await fetch("http://localhost:8088/colonyInventories?_expand=mineral").then(res => res.json())

    if (event.target.id === "governors") {
        for (const colonyInventory of inventory) {
            if (colonyId === event.dataset.colonyId) {
                html += `<p>${}`
            }
        }
    }

}


// if governor is selected
    // loop colonyInventories[]
        // if array colonyId === governor.colonyId...
            // add to HTML string: [x] tons of [mineral]
