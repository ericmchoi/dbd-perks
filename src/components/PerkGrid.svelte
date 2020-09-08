<script>
  export let perks;
  export let filter = "";
  export let selectedPerk;

  function perkMatch(perk, filter) {
    if (!filter) return true;

    const perkText = (
      perk.name +
      perk.type +
      perk.unique +
      (perk.tags ? perk.tags.join("") : "")
    ).toLowerCase();

    for (const word of filter.split(/\s+/)) {
      if (perkText.indexOf(word.toLowerCase()) == -1) return false;
    }

    return true;
  }
</script>

<style>
  .perks {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(12.8rem, 1fr));
    grid-gap: 0.5rem;
    justify-content: center;
  }

  .perk {
    position: relative;
    width: 100%;
    height: 16rem;
    border-radius: 0.5rem;
    background-color: #111;
    text-align: center;
  }

  .perk:hover {
    background-color: #333;
  }

  .perk-selected::after {
    content: "";
    display: block;
    width: 100%;
    height: 0.3rem;
    position: absolute;
    bottom: 0;
    background-color: #e41735;
    border-radius: 0 0 0.5rem 0.5rem;
  }

  .perk-hidden {
    display: none;
  }

  .perk_icon {
    width: 12rem;
    height: 12rem;
    object-fit: cover;
  }

  .perk_name {
    position: absolute;
    bottom: 0.3rem;
    width: 100%;
    padding: 0 0.5rem;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
</style>

<div class="perks">
  {#each perks as perk}
    <div
      class="perk"
      class:perk-selected={selectedPerk == perk.id}
      class:perk-hidden={!perkMatch(perk, filter)}
      on:click={() => (selectedPerk = perk.id)}>
      <img
        class="perk_icon"
        src="images/perks/iconPerks_{perk.codename}.png"
        alt={perk.name} />
      <div class="perk_name">
        <span>{perk.name}</span>
      </div>
    </div>
  {/each}
</div>
