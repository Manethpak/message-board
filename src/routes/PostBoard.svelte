<script lang="ts">
  import Icon from "svelte-icons-pack";
  import AiOutlineCheck from "svelte-icons-pack/ai/AiOutlineCheck";
  import { getNotificationsContext } from 'svelte-notifications';
  import { collection, addDoc } from "firebase/firestore"; 
  import { db, auth } from "../firebase/client";
  import { push } from "svelte-spa-router";
  
  const { addNotification } = getNotificationsContext();

  let title = "";
  let body = "";
  let topicInput = "";
  let topics = [];
  let isAnonymous = false;

  $: if (topicInput) {
    if (topicInput.includes(",")) {
      addTopic(topicInput.slice(0, topicInput.length - 1));
      topicInput = "";
    }
  }

  $: if (topics.length > 3) {
    topics = topics.slice(0, 3);
  }

  const addTopic = (topic: string) => {
    topics.push(topic.toLowerCase());
    topics = topics
  };

  const removeTopic = (index: number) => {
    topics.splice(index, 1);
    topics = topics
  };

  const submit = async () => {
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        title,
        body,
        topics,
        author: {
          uid: auth.currentUser.uid,
          displayName: isAnonymous ? "anonymous" : auth.currentUser.displayName,
        },
        createdAt: new Date(),
        updatedAt: new Date(),
        replies: [],
      });
      
      addNotification({
        text: "Post created",
        position: 'top-center',
        type: 'success',
        removeAfter: 2000,
      })
      push("/board/" + docRef.id)
    } catch (e) {
      addNotification({
        text: "Error creating post",
        position: 'top-center',
        type: 'error',
        removeAfter: 2000,
      })
    }
  };

  const filterClass = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ")
  };
</script>

<div>
  <form on:submit|preventDefault={submit} class="flex flex-col mt-10">
  
    <label for="title" class="mt-2">Title</label>
    <p class="text-sm">Title can only contain 30 character</p>
    <input required bind:value={title} id="title" type="text" class="input w-[30rem]" maxlength="30" />

    <label for="body"  class="mt-2">Body</label>
    <p class="text-sm"></p>
    <textarea required rows="6" bind:value={body} id="body" class="input w-[30rem]" />

    <label for="topics" class="mt-2">Topics</label>
    <p class="text-xs">Should contain 0 to 3 topic seperated by comma</p>
    <input bind:value={topicInput} id="topics" type="text" class="input w-[30rem]" maxlength="11" />

    <div class="flex mt-2 space-x-2">
    {#each topics as topic}
      <button type="button" class="btn-primary text-sm" on:click={() => removeTopic(topic)}>
        {topic}
      </button>
    {/each}
    </div>

    <div class="flex items-center gap-1 my-4 cursor-pointer">
      <input type="checkbox" id="isAnonymous" class="hidden" bind:checked={isAnonymous} />
      <button type="button" class={filterClass("w-5 h-5 rounded-md flex justify-center items-center", isAnonymous ? "bg-blue-400": "bg-white")} on:click={() => isAnonymous = !isAnonymous}>
        {#if isAnonymous}
          <Icon src={AiOutlineCheck} size={16} color="white" />
        {/if}
      </button>
      <label for="isAnonymous" class="select-none">Post as anonymous?</label>
    </div>

    <div class="flex justify-center gap-5">
      <button type="reset" class="btn-primary">Reset</button>
      <button type="submit" class="btn-primary">Post</button>
    </div>
  </form>
</div>