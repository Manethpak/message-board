<script lang="ts">
  import { getDoc, doc, onSnapshot, deleteDoc } from "firebase/firestore"; 
  import { pop, replace } from "svelte-spa-router";
  import { onDestroy } from "svelte/internal";
  import { db } from "../firebase/client";
  import { userStore } from "../stores/user";
  import { toCalenderTime } from "../libs";
  import Icon from "svelte-icons-pack";
  import BiArrowBack from "svelte-icons-pack/bi/BiArrowBack"; 
  import PostComment from "../components/PostComment.svelte";
  import Comment from "../components/Comment.svelte";

  export let params = {
    id: ""
  }

  let promise = fetchPost()

  const unsub = onSnapshot(doc(db, "posts", params.id), (doc) => {
    if (doc.exists()) {
      promise = fetchPost()
    } 
  });

  async function fetchPost() {
    const snap = await getDoc(doc(db, 'posts', params.id))
   
    if (snap.exists()) {
      return snap.data()
    } else {
      throw new Error('Post not found')
    }
  }

 

  const onDelete = async () => {
    let result = confirm("Are you sure you want to delete this post?");
    if (!result) return;
    try {
      await deleteDoc(doc(db, 'posts', params.id))
      replace("/")
    } catch (error) {
      console.log(error)
    }
  }


  onDestroy(unsub)
</script>

<div class="mt-10">
  <button class="ml-2 inline-flex" on:click={pop}>
    <Icon src={BiArrowBack} color="white" size="38" />
    <span>
      Back
    </span>
  </button>

  {#await promise}
  <p class="text-2xl">Loading...</p>
  {:then data}
  <article class="w-[40rem] bg-neutral-800 p-6 mb-6 md:p-10 rounded-2xl">
    {#if $userStore && $userStore.uid === data.author.uid}
      <div class="flex justify-end gap-6">
        <button class="hover:underline" on:click={onDelete}>Delete</button>
      </div>
    {/if}
    <h1 class="text-3xl text-center mb-4">{data.title}</h1>
    <p class="opacity-60">Posted by {data.author.displayName}: <time>{toCalenderTime(data.createdAt.seconds)}</time></p>
    {#if data.updatedAt.seconds !== data.createdAt.seconds}
      <p class="opacity-60">Last updated: <time>{toCalenderTime(data.updatedAt.seconds)}</time></p>
    {/if}
    <div class="flex gap-2 my-2">
    {#each data.topics as topic}
      <button class="text-sm btn-primary px-2 py-1">{topic}</button>
    {/each}
    </div>
    <div class="w-full h-[1px] my-2 bg-gray-500" />
    <p class="leading-loose tracking-wide text-justify">{data.body}</p>
  </article>

  {#if data.replies.length > 0}
    {#each data.replies.reverse() as reply}
      <Comment comment={reply} postId={params.id} />
    {/each}
  {/if}

  <PostComment postId={params.id} />
  
  {:catch}
  <h1 class="text-2xl">
    Post not found
  </h1>
  {/await}


</div>