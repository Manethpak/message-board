<script>
  import { slide } from "svelte/transition";
  import { link } from "svelte-spa-router";
  import { auth } from "../firebase/client";
  import { signOut } from "firebase/auth";
  import { userStore } from "../stores/user";

  let showMenu = false;
</script>

<div class="hidden md:block">
  <div class="flex gap-10 justify-center">
    <a href="/" use:link class="text-xl hover:text-gray-300">Home</a>
    <a href="/" use:link class="text-xl hover:text-gray-300">About Us</a>
    <div class="md:px-20" />

    {#if $userStore === null}
    <a href="/login" use:link class="text-xl hover:text-gray-300">Login</a>
    <a href="/register" use:link class="text-xl hover:text-gray-300">Register</a>
    {:else}
    <p class="text-xl">Hi, {$userStore.displayName}!</p>
    <button on:click={() => signOut(auth)} class="text-xl hover:text-gray-300">Logout</button>
    {/if}
    
  </div>
  <div class="w-[90vw] border"/>
</div>

<div class="block md:hidden">
  <div class="w-[90vw] border"/>
  <div class="flex justify-center">
    <button class="text-xl hover:text-gray-300" on:click={() => showMenu = !showMenu}>Menu</button>
  </div>

  {#if showMenu}
  <ul transition:slide|local class="bg-neutral-600 w-full flex flex-col gap-4 py-2 px-4 mt-2 rounded-md">
    <a href="/" use:link class=" hover:text-gray-300">Home</a>
    <a href="/" use:link class=" hover:text-gray-300">About Us</a>
    
    {#if $userStore === null}
    <a href="/login" use:link class=" hover:text-gray-300">Login</a>
    <a href="/register" use:link class=" hover:text-gray-300">Register</a>
    {:else}
    <p class="">Hi, {$userStore.displayName}!</p>
    <button on:click={() => signOut(auth)} class=" hover:text-gray-300">Logout</button>
    {/if}

  </ul>
  {/if}
</div>
