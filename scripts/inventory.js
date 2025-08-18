// fetch governors and colony inventory
const governorsList = async () => {
    const governor = await fetch("http://localhost:8088/governors").then(res => res.json())
}

const colonyInventory = async () => {
    const governor = await fetch("http://localhost:8088/colonyInventories").then(res => res.json())
}