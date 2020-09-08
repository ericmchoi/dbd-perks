<script>
  import { fade } from "svelte/transition";

  export let right = false;
  export let x = 0;
  export let y = 0;
  export let hover = false;
  let selfHover = false;
  let style = "";
  $: style = `${right ? "right" : "left"}: ${x}px; top: ${y}px`;
</script>

<style>
  .tooltip {
    min-width: 4rem;
    max-width: 20rem;
    position: fixed;
    background: #111;
    border: 0.2rem solid #444;
    border-radius: 0.4rem;
    padding: 0.4rem 0.6rem;
    font-family: "Roboto Condensed", "Roboto", sans-serif;
    font-weight: 300;
    font-size: 1.4rem;
  }

  .tooltip::before,
  .tooltip::after {
    content: "";
    position: absolute;
    bottom: 100%;
    border-style: solid;
  }

  .tooltip-left::before,
  .tooltip-left::after {
    left: 1.4rem;
  }

  .tooltip-left::before {
    margin-left: -1.1rem;
    border-width: 1.1rem;
    border-color: transparent transparent #444 transparent;
  }

  .tooltip-left::after {
    margin-left: -0.8rem;
    border-width: 0.8rem;
    border-color: transparent transparent #111 transparent;
  }

  .tooltip-right::before,
  .tooltip-right::after {
    right: 1.4rem;
  }

  .tooltip-right::before {
    margin-right: -1.1rem;
  }

  .tooltip-right::after {
    margin-right: -0.8rem;
  }

  .tooltip-left::before,
  .tooltip-right::before {
    border-width: 1.1rem;
    border-color: transparent transparent #444 transparent;
  }

  .tooltip-left::after,
  .tooltip-right::after {
    border-width: 0.8rem;
    border-color: transparent transparent #111 transparent;
  }

  .tooltip :global(*):first-child {
    margin-top: 0 !important;
  }

  .tooltip :global(*):last-child {
    margin-bottom: 0 !important;
  }
</style>

{#if hover || selfHover}
  <div
    class="tooltip"
    class:tooltip-right={right}
    class:tooltip-left={!right}
    {style}
    out:fade
    on:mouseenter={(_) => (selfHover = true)}
    on:mouseleave={(_) => (selfHover = false)}>
    <slot>Loading...</slot>
  </div>
{/if}
