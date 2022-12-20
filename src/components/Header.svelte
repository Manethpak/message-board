<script lang="ts">
  import { replace } from "svelte-spa-router";

  let searchKey = "";

  const handleSubmit = () => {
    replace(`/search/${searchKey}`);
  }

</script>

<header class="flex flex-col justify-center items-center py-14 gap-6">
  <h1 class="text-xl md:text-4xl font-[500] uppercase text-center">Welcome to Message Board 📮</h1>
  <form on:submit|preventDefault={handleSubmit} class="flex flex-col md:flex-row gap-4 px-4">
    <input type="text" bind:value={searchKey} placeholder="Search a topic..." class="input"  />
    <button type="submit" class="btn-primary">Search</button>
  </form>
</header>