import { governorDropDown, facilityDropDown } from "./GovernorSelector.js";
const governorDropDownHTML = await governorDropDown();
const facilityDropDownHTML = await facilityDropDown();

const container = document.querySelector("#container");

const render = () => {
  const html = `
        <h1>Solar System Mining Marketplace</h1>

        <article class="drop-downs">
            ${governorDropDownHTML}
            ${facilityDropDownHTML}
        </article>

        <article class="facilityMineralsChoice">
        </article>

        <article class="colonyMineralsInventory">
        </article>

        <article class="spaceCart">
            <h2>Space Cart</h2>
        </article>
    `;
  container.innerHTML = html;
};

render();
