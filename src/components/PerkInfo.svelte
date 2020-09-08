<script>
  import { afterUpdate } from "svelte";
  import Tooltip from "./Tooltip.svelte";
  import getHTML from "../utils/markdown";

  // props
  export let perk;

  // reference to description DOM node
  let descEl;

  // tooltip props
  let tooltip = {
    right: false,
    x: 0,
    y: 0,
  };
  let tooltipText = "";
  let hover = false;

  async function getPerk(perk) {
    if (process.env.NODE_ENV === "development") {
      const res = await fetch(`data/perk/${perk.codename}.json`);
      return await res.json();
    }

    return perk;
  }

  function handleMouseOver(event) {
    hover = true;

    const rect = event.target.getBoundingClientRect();
    const right = rect.left + 200 > document.body.clientWidth;
    const x = right ? document.body.clientWidth - rect.right : rect.left;
    const y = rect.bottom + 5;
    tooltip = { right, x, y };

    const tooltipTarget = event.target.getAttribute("dbd-tooltip");
    fetch(`data/${tooltipTarget.replace(":", "/")}.json`)
      .then((res) => res.json())
      .then((data) => (tooltipText = data.description));
  }

  function handleMouseLeave(event) {
    hover = false;
  }

  afterUpdate(() => {
    if (descEl) {
      const tooltips = descEl.getElementsByClassName("tooltipped");
      for (const tooltip of tooltips) {
        tooltip.addEventListener("mouseover", handleMouseOver);
        tooltip.addEventListener("mouseleave", handleMouseLeave);
      }
    }
  });
</script>

<style>
  .head {
    padding: 0.5rem;
    border-radius: 0.4rem 0.4rem 0 0;
    border-bottom: 0.2rem solid white;

    display: grid;
    grid-template-columns: 8rem 1fr;
    grid-gap: 0.5rem;
    align-items: center;

    background: url("https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog1.png")
      #249c3a44;
    background-repeat: repeat-x;
    animation: move-background 15s linear infinite;
  }

  .head_veryrare {
    background: url("https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog1.png")
      #8b3ca544;
  }

  @keyframes move-background {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -1000px 0;
    }
  }

  .crop {
    width: 8rem;
    height: 8rem;
    position: relative;
    overflow: hidden;
  }

  .icon {
    width: 10rem;
    height: 10rem;
    position: absolute;
    left: -1rem;
    top: -1rem;
  }

  .name {
    margin: 0;
    align-self: flex-end;
    text-transform: uppercase;
    font-weight: 300;
  }

  .name::first-letter {
    font-size: 4.2rem;
  }

  .type {
    text-transform: capitalize;
    font-style: italic;
    font-family: "Roboto Condensed", sans-serif;
  }

  .type_killer {
    color: #ff3c3c;
  }

  .type_survivor {
    color: #49aef9;
  }

  .info {
    background: #222;
    padding: 1.2rem;
    border-radius: 0 0 0.4rem 0.4rem;
  }

  .desc {
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 300;
  }

  .desc :global(strong) {
    font-weight: 700;
  }

  .desc :global(ul) {
    padding-left: 3rem;
  }

  .desc :global(*):first-child {
    margin-top: 0 !important;
  }

  .desc :global(*):last-child {
    margin-bottom: 0 !important;
  }

  :global(.desc-values) {
    white-space: nowrap;
  }

  :global(.tooltipped) {
    border-bottom: 1px dotted white;
  }

  .flavor {
    font-weight: 300;
    font-style: italic;
    font-size: 1.4rem;
    color: #d8b89b;
  }

  .flavor :global(*):last-child {
    margin-bottom: 0 !important;
  }
</style>

{#await getPerk(perk) then perk}
  <div class="head" class:head_veryrare={perk.level > 30}>
    <div class="crop">
      <img
        class="icon"
        src="images/perks/iconPerks_{perk.codename}.png"
        alt={perk.name} />
    </div>
    <h1 class="name">{perk.name}</h1>
  </div>
  <div class="info">
    <div class="type type_{perk.type}">
      {perk.unique || 'general'}
      {perk.type} perk
    </div>
    <div class="desc" bind:this={descEl}>
      {@html getHTML(perk.description, true)}
    </div>
    {#if perk.flavor}
      <div class="flavor">
        {@html getHTML(perk.flavor)}
      </div>
    {/if}
  </div>
{/await}

<Tooltip {...tooltip} bind:hover>
  {@html getHTML(tooltipText)}
</Tooltip>
