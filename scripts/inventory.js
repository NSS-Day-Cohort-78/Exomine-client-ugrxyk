
export const colonyInventory = async (event) => {
    const inventory = await fetch("http://localhost:8088/colonyInventories?_expand=mineral").then(res => res.json())

    let html = ""

    // if (event.target.id === "governors") {
        for (const colonyInventory of inventory) {
            if (parseInt(event.dataset.colonyId) === colonyInventory.colonyId) {
                html += `${colonyInventory.quantity} tons of ${colonyInventory.mineral.name}`
            }
        }
    // }

    return html

}

// if governor is selected
    // loop colonyInventories[]
        // if array colonyId === governor.colonyId...
            // add to HTML string: [x] tons of [mineral]
