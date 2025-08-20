import { governorDropDown } from "./GovernorSelector.js";
import { facilityDropDown } from "./FacilityDropDown.js";

const governorDropDownHTML = await governorDropDown();
const facilityDropDownHTML = await facilityDropDown();

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
