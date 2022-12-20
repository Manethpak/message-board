<script lang="ts">
  import { onMount } from 'svelte';
  import { auth } from "../firebase/client";
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { getNotificationsContext } from 'svelte-notifications';
  import { replace } from "svelte-spa-router";
  
  const { addNotification } = getNotificationsContext();

  let email = "";
  let password = "";

  onMount(() => {
    if (auth.currentUser) {
      replace("/")
    }
  })

  const handleRegister = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      addNotification({
        text: 'Logged in',
        position: 'top-center',
        type: 'success',
        removeAfter: 2000,
      })
      replace("/")
    } catch (error) {
      addNotification({
        text: 'Error logging in',
        position: 'top-center',
        type: 'success',
        removeAfter: 2000,
      })
    }
  }
</script>

<form class="flex justify-center flex-col gap-4 items-center bg-neutral-800 shadow-xl rounded-2xl w-[28rem] h-[28rem] mt-20" on:submit|preventDefault={handleRegister}>
  <h1 class="text-2xl">
    Login to Message Board
  </h1>

  <div class="flex flex-col ">
    <label for="email">Email</label>
    <input required type="text" class="input" id="email" bind:value={email} />
  </div>

  <div class="flex flex-col ">
    <label for="email">Password</label>
    <input required type="password" class="input" id="password" bind:value={password} />
  </div>

  <button class="btn-primary" type="submit">Login</button>
  <p>
    Don't have an account? <a href="#/login" class="hover:text-gray-400 underline">Register</a>
  </p>
</form>