<script lang="ts">
  import { arrayRemove, doc, updateDoc } from "firebase/firestore";
  import { db } from "../firebase/client";
  import { toCalenderTime } from "../libs";
  import { userStore } from "../stores/user";

  export let comment:any = {};
  export let postId = "";

  const deleteComment = async (reply: any) => {
    let result = confirm("Are you sure you want to delete this comment?");
    if (!result) return;
    try {
      await updateDoc(doc(db, 'posts', postId), {
        replies: arrayRemove(reply)
      })
    } catch (error) {
      console.log(error)
    }
  }

</script>

<div class="w-full h-fit bg-neutral-800 rounded-xl mt-2 py-4 px-8 relative">
  <p class="text-sm text-gray-500 mb-1">{comment.author.displayName}: <time>{toCalenderTime(comment.timestamp.seconds)}</time></p>
  <p>{comment.text}</p>
  {#if $userStore && $userStore.uid === comment.author.uid}
  <div class="flex justify-end">
    <button on:click={() => deleteComment(comment)} class="hover:underline">Delete</button>
  </div>
  {/if}
</div>