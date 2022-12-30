<script lang="ts">
  import { getDocs, query, collection, orderBy, where, limit} from "firebase/firestore";
  import Card from "../components/Card.svelte";
  import { db } from "../firebase/client";

  export let params = {
    query: ""
  }

  async function getPosts() {
    const snap = await getDocs(query(collection(db, "posts"), where("topics", "array-contains", params.query) ,orderBy("createdAt", "desc"), limit(20)));
    if (snap.empty) {
      throw new Error("No post found.");
    }
    return snap.docs
  }
</script>

<div class="my-10">
  <h1 class="text-2xl mb-5 text-center">Search Result</h1>
  
  <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
    {#await getPosts()}
    <p class="empty-card">Loading...</p>
    {:then posts}
    {#each posts as post (post.id)}
    <Card data={{...post.data(), id: post.id}} />
    {/each}
    {:catch error}    
    <p class="empty-card">{error}</p>
    {/await}
  </div>
</div>