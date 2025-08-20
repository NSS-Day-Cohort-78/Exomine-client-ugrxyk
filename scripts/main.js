import { governorDropDown, facilityDropDown } from "./GovernorSelector.js";
import { showColonyInventory } from "./inventory.js";

const container = document.querySelector("#container");

const render = async () => {
    const governorDropDownHTML = await governorDropDown();
    const facilityDropDownHTML = await facilityDropDown();
    const colonyInventoryHTML = await showColonyInventory();

  const html = `
        <h1>Solar System Mining Marketplace</h1>

        <div class="container-fluid">
          <div class="row">
            <article class="col dropdown">
              ${governorDropDownHTML}
              ${facilityDropDownHTML}
            </article>
            <article class="col colonyMineralsInventory" id="colony-inventory-section">
            ${colonyInventoryHTML}
            </article>
          </div>

          <div class="row">
            <article class=" col" >
            </article>
            
            <article class="spaceCart col">
              <h2>Space Cart</h2>
            </article>
          </div>
        </div>
    `;
  container.innerHTML = html;
};

const inventoryRender = async () => {
  const inventorySelection = document.querySelector("#colony-inventory-section")
  const colonyInventoryHTML = await showColonyInventory();

  const html = `${colonyInventoryHTML}`;
  inventorySelection.innerHTML = html;
}

document.addEventListener("stateChanged", inventoryRender)

render();
