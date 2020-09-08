<script context="module">
  export async function preload() {
    const res = await this.fetch(`data/perks.json`);
    const data = await res.json();

    for (const [i, value] of data.entries()) {
      data[i].id = i;
    }

    if (res.status === 200) {
      return { perks: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import PerkGrid from "../components/PerkGrid.svelte";
  import PerkInfo from "../components/PerkInfo.svelte";
  import FilterInput from "../components/FilterInput.svelte";

  export let perks;
  let selectedPerk = null;
  let filter = "";

  function clearSelected() {
    selectedPerk = null;
  }
</script>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 40rem;
    grid-gap: 1rem;
    padding: 1rem;
  }

  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 1rem;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #000000cc;
    overflow: hidden;
  }

  .modal-content {
    position: relative;
    max-width: 64rem;
    margin: 0 auto;
    padding: 1rem;
  }

  .modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
  }

  @media screen and (min-width: 769px) {
    .filter {
      display: none;
    }

    .modal {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    .side {
      display: none;
    }

    .container {
      display: block;
    }
  }
</style>

<svelte:head>
  <title>DBD Perks</title>
</svelte:head>

<div class="container">
  <div class="filter">
    <FilterInput bind:value={filter} />
  </div>
  <div class="main">
    <PerkGrid {perks} {filter} bind:selectedPerk />
  </div>
  <div class="side">
    <div class="sticky">
      <FilterInput bind:value={filter} />
      {#if selectedPerk !== null}
        <PerkInfo perk={perks[selectedPerk]} />
      {/if}
    </div>
  </div>
</div>
{#if selectedPerk !== null}
  <div class="modal" on:click|self={clearSelected}>
    <div class="modal-content">
      <PerkInfo perk={perks[selectedPerk]} />
      <i class="material-icons modal-close" on:click={clearSelected}>clear</i>
    </div>
  </div>
{/if}
