const container = document.querySelector("#container");

const render = async () => {
  const html = `
        <h1>Solar System Mining Marketplace</h1>

        <article class="drop-downs">
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
