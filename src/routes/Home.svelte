<script lang="ts">
  import Card from "../components/Card.svelte";

  let cats = Array(10).fill(0);
</script>


<section class="my-8 grid md:grid-cols-2 xl:grid-cols-3 gap-10">
  {#each cats as cat}
    <Card />
  {/each}
</section>