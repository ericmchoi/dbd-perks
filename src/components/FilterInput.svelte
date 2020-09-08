<script>
  export let value = "";

  function clearFilter() {
    value = "";
  }
</script>

<style>
  .container {
    position: relative;
    width: 100%;
    margin-bottom: 0.8rem;
  }

  input {
    width: 100%;
    height: 2.6rem;
    font-size: 1.4rem;
  }

  i {
    position: absolute;
    top: 0.4rem;
    right: 0.5rem;
    color: black;
    font-size: 1.8rem;
  }
</style>

<div class="container">
  <input bind:value aria-label="Filter" placeholder="Type anything to filter!" />
  {#if value}
    <i class="material-icons" on:click={clearFilter}>clear</i>
  {/if}
</div>
