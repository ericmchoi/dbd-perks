<script>
  import { fly } from "svelte/transition";

  import Nav from "../components/Nav.svelte";
  import ScrollTopButton from "../components/ScrollTopButton.svelte";

  export let segment;
</script>

<Nav {segment} />

<main>
  <slot />
</main>

<ScrollTopButton />
