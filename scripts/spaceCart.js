import { purchaseMineral } from "./TransientState.js"

const handlePurchase = async(event) => {
    if(event.target.id === "purchase-button") {
        await purchaseMineral()
        console.log("purchase")
    }
}


export const purchaseButton = () => {
    document.addEventListener("click", handlePurchase)
    return "<button id='purchase-button'>Purchase Mineral</button>"    
}