import { governorDropDown, facilityDropDown } from "./GovernorSelector.js";
import { colonyInventory } from "./inventory.js";
const governorDropDownHTML = await governorDropDown();
const facilityDropDownHTML = await facilityDropDown();
const inventoryHTML = await colonyInventory();

const container = document.querySelector("#container");

const render = () => {
  const html = `
        <h1>Solar System Mining Marketplace</h1>

        <div class="container-fluid">
          <div class="row">
            <article class="col dropdown">
              ${governorDropDownHTML}
              ${facilityDropDownHTML}
            </article>

            <article class="col colonyInventory">
            </article>
          </div>

        <article class="colonyMineralsInventory">
            ${inventoryHTML}
        </article>

        <article class="spaceCart">
            <h2>Space Cart</h2>
        </article>
          <div class="row">
            <article class="colonyMineralsInventory col">
            </article>
            
            <article class="spaceCart col">
              <h2>Space Cart</h2>
            </article>
          </div>
        </div>
    `;
  container.innerHTML = html;
};

render();
