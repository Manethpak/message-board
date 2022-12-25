<script lang="ts">
  import { auth } from "../firebase/client";
  import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
  import { getNotificationsContext } from 'svelte-notifications';
  import { replace } from 'svelte-spa-router'
  import { onMount } from "svelte";

  const { addNotification } = getNotificationsContext();

  onMount(() => {
    if (auth.currentUser) {
      replace("/")
    }
  })
  
  let email = "";
  let username = "";
  let password = "";

  const handleRegister = async () => {
    if (password.length < 6) {
      addNotification({
        text: 'Password must be at least 6 characters',
        position: 'top-center',
        type: 'error',
        removeAfter: 2000,
      })
      return
    }
    
    if (username.length < 3 || username.length>10) {
      addNotification({
        text: 'Password must be between 3 and 10 characters',
        position: 'top-center',
        type: 'error',
        removeAfter: 2000,
      })
      return
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(auth.currentUser, { displayName: username })
      addNotification({
        text: 'Registered user successfully',
        position: 'top-center',
        type: 'success',
        removeAfter: 2000,
      })
      replace("/")
    } catch (error) {
      addNotification({
        text: 'Error registering user',
        position: 'top-center',
        type: 'error',
        removeAfter: 2000,
      })
    }
    
  }
</script>

<form class="flex justify-center flex-col gap-4 items-center bg-neutral-800 shadow-xl rounded-2xl w-[28rem] h-[28rem] mt-20" on:submit|preventDefault={handleRegister}>
  <h1 class="text-2xl">
    Register to Message Board
  </h1>

  <div class="flex flex-col ">
    <label for="email">Email</label>
    <input required type="text" class="input" id="email" bind:value={email} />
  </div>
  
  <div class="flex flex-col ">
    <label for="username">Username</label>
    <input required type="text" class="input" id="username" bind:value={username} />
  </div>

  <div class="flex flex-col ">
    <label for="email">Password</label>
    <input required type="password" class="input" id="password" bind:value={password} />
  </div>

  <button class="btn-primary" type="submit">Register</button>
  <p>
    Already have an account? <a href="#/login" class="hover:text-gray-400 underline">Login</a>
  </p>
</form>