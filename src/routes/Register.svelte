<script lang="ts">
  import { auth } from "../firebase/client";
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import { notify } from "../libs/notify";
  
  let email = "";
  let username = "";
  let password = "";

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      notify("Logged in successfully", "success")
    } catch (error) {
      notify("Error logging in", "error")
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