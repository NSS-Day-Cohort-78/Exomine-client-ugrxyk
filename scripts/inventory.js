// fetch colony inventory
const colonyInventory = async () => {
    const governor = await fetch("http://localhost:8088/colonyInventories").then(res => res.json())
}