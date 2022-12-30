<script lang="ts">
  import { push } from "svelte-spa-router";
  import Card from "../components/Card.svelte";
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import AiOutlinePlusCircle from "svelte-icons-pack/ai/AiOutlinePlusCircle"; 
  import { userStore } from "../stores/user";
  import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
  import { db } from "../firebase/client";

  const navigate = () => {
    if ($userStore) push("/post-board");
  }

  async function getPosts() {
    const snap = await getDocs(query(collection(db, "posts"), orderBy("createdAt", "desc"), limit(50)));
    if (snap.empty) {
      throw new Error("No post found.");
    }
    return snap.docs
  }
  let posts = getPosts();
</script>


<section class="my-8 grid md:grid-cols-2 xl:grid-cols-3 gap-10">
  <button class="empty-card" 
  on:click={navigate}>
    {#if $userStore}
    <Icon src={AiOutlinePlusCircle} size="5rem" color="white" />
    <p class="text-gray-200">
      Start a new Board
    </p>
    {:else}
    <p class="text-gray-200">
      Login to start a new Board
    </p>
    {/if}
  </button>

  {#await posts}
    <p class="empty-card">Loading...</p>
  {:then posts}
    {#each posts as post (post.id)}
      <Card data={{...post.data(), id: post.id}} />
    {/each}
  {:catch error}    
    <p class="empty-card">{error}</p>
  {/await}
</section>