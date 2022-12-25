<script lang="ts">
  import { push } from "svelte-spa-router";
  import toCalenderTime from "../libs/toCalender";

  export let data: {
    [key: string]: any
  } = {
    id: "",
    title: "",
    author: {
      uid: "",
      displayName: "",
    },
    topics: [],
    body: "",
    replies: [],
    createdAt: {
      seconds: 0,
      nanoseconds: 0,
    },
  }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="w-[20rem] min-h-[13rem] bg-neutral-800 rounded-xl shadow-xl p-4 cursor-pointer transition-all transform hover:-translate-y-2 space-y-2" on:click={() => push("/board/" + data.id)}>
  <p class="text-xl line-clamp-1">{data.title}</p>
  <div class="flex gap-2">
    {#each data.topics as topic}
      <button class="text-sm btn-primary px-2 py-1">{topic}</button>
    {/each}
  </div>
  <p class="text-sm text-gray-400">
    Posted by <span class="text-primary">{data.author.displayName}</span> @ <time>{toCalenderTime(data.createdAt.seconds)}</time>
  </p>
  <p class="line-clamp-3">
    {data.body}
  </p>
  <p class="text-sm text-gray-400 text-right">{data.replies.length} replies...</p>
</div>