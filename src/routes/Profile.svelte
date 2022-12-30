<script lang="ts">
  import { replace } from "svelte-spa-router";
  import { userStore } from "../stores/user";

  $: if ($userStore === null) {
    replace("/login");
  }
</script>

<div class="max-w-lg my-10 space-y-4">
  <div class=" flex flex-col ">
    <label for="username">Username</label>
    <input class="input text-gray-300 cursor-not-allowed" type="text" id="username" bind:value={$userStore.displayName} disabled />
  </div>
  <div class=" flex flex-col ">
    <label for="email">Email</label>
    <input class="input text-gray-300 cursor-not-allowed" type="email" id="email" bind:value={$userStore.email} disabled />
  </div>
</div>

<style scoped>
  

</style>