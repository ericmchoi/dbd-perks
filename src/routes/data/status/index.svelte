<script context="module">
  // This page is used to create entrypoints for status json requests when exporting with sapper
  export async function preload() {
    return this.fetch(`data/status.json`)
      .then((r) => r.json())
      .then((statuses) => {
        return { statuses };
      });
  }
</script>

<script>
  export let statuses = [];
</script>

{#each statuses as status}
  <a href="./data/status/{status}.json">{status}</a><br />
{/each}
