<script lang="ts">
  import { doc, updateDoc, arrayRemove, arrayUnion } from "firebase/firestore";
  import { filterClass } from "../libs";
  import { db } from "../firebase/client";
  import { userStore } from "../stores/user";
  import Icon from "svelte-icons-pack";
  import AiOutlineCheck from "svelte-icons-pack/ai/AiOutlineCheck";

  export let postId = "";

  let isAnonymous = false;
  let comment = "";
  let hasError = "";

   const onComment = async () => {
    if (comment.length === 0) {
      hasError = "Comment cannot be empty";
      return;
    };
    try {
      await updateDoc(doc(db, 'posts', postId), {
        replies: arrayUnion({
          text: comment,
          timestamp: new Date(),
          author: {
            uid: $userStore.uid,
            displayName: isAnonymous ? "anonymous" : $userStore.displayName,
          }
        })
      })
      comment = ""
    } catch (error) {
      console.log(error)
    }
  }
</script>

<section>
  {#if $userStore}
    <div class="flex justify-center mt-10 gap-2">
      <input type="text" class="input w-full" placeholder="Write a comment..." bind:value={comment} />
      <button class="btn-primary" on:click={onComment}>Comment</button>
    </div>
    {#if hasError}
      <p class="text-red-500">{hasError}</p>
    {/if}
    <div class="flex items-center gap-1 my-4 cursor-pointer">
      <input type="checkbox" id="isAnonymous" class="hidden" bind:checked={isAnonymous} />
      <button type="button" class={filterClass("w-5 h-5 rounded-md flex justify-center items-center", isAnonymous ? "bg-blue-400": "bg-white")} on:click={() => isAnonymous = !isAnonymous}>
        {#if isAnonymous}
          <Icon src={AiOutlineCheck} size={16} color="white" />
        {/if}
      </button>
      <label for="isAnonymous" class="select-none">Post as anonymous?</label>
    </div>
    {:else}
    <div class="flex justify-center mt-10 gap-2">
      <a href="#/login" class="btn-primary">Login to comment</a>
    </div>
  {/if}

</section>