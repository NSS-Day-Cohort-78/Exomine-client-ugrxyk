import { governorDropDown } from "./GovernorSelector.js";
import { facilityDropDown } from "./FacilityDropDown.js";
import { showColonyInventory } from "./inventory.js";
import { GetMineralSelection } from "./mineralSelection.js";
import { purchaseButton } from "./spaceCart.js";

const container = document.querySelector("#container");

const render = async () => {
  const governorDropDownHTML = await governorDropDown();
  const facilityDropDownHTML = await facilityDropDown();
  const colonyInventoryHTML = await showColonyInventory();
  const purchaseButtonHTML = await purchaseButton();
  const html = `
        <h1>Solar System Mining Marketplace</h1>

        <div class="container-fluid">
          <div class="row">
            <article class="col dropdown">
              <div class="m-3">${governorDropDownHTML}</div>
              <div class="m-3">${facilityDropDownHTML}</div>
            </article>

            <article class="col colonyMineralsInventory" id="colony-inventory-section">
            <div class="m-3">${colonyInventoryHTML}</div>
            </article>
          </div>

          <div class="row">
            <article class="colonyMineralsInventory col border text-center" id="facility-inventory-selection">
            </article>
            
            <article class="spaceCart col border">
              <h2 class="text-center">Space Cart</h2>
              <div class="border text-center">${purchaseButtonHTML}</div>
            </article>
          </div>
        </div>
    `;
  container.innerHTML = html;
};

const inventoryRender = async () => {
  const inventorySelection = document.querySelector(
    "#colony-inventory-section"
  );
  const colonyInventoryHTML = await showColonyInventory();

  const html = `${colonyInventoryHTML}`;
  inventorySelection.innerHTML = html;
};

const mineralSelectionRender = async () => {
  const inventorySelection = document.querySelector(
    "#facility-inventory-selection"
  );
  const facilityInventoryHTML = await GetMineralSelection();

  const html = `${facilityInventoryHTML}`;
  inventorySelection.innerHTML = html;
};

document.addEventListener("stateChanged", inventoryRender);
document.addEventListener("facilityStateChanged", mineralSelectionRender);

render();
