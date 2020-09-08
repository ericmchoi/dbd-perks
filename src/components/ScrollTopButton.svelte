<script>
  import { fly } from "svelte/transition";

  let scrollY;
  let innerWidth;

  function scrollToTop() {
    scrollY = 0;
  }
</script>

<style>
  .button {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 4.8rem;
    height: 4.8rem;
    border: solid 1px #ec225ecc;
    border-radius: 2.4rem;
    background: #ec225e;
  }
</style>

<svelte:window bind:scrollY bind:innerWidth />

{#if scrollY > 100 && innerWidth < 769}
  <div
    class="button"
    on:click={scrollToTop}
    transition:fly={{ y: 20 }}>
    <i class="material-icons">publish</i>
  </div>
{/if}
