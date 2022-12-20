import { auth } from "../firebase/client";
import { onAuthStateChanged, type User } from "firebase/auth";
import { writable } from "svelte/store";

export const userStore = writable<User | null>(null);

onAuthStateChanged(auth, (user) => {
  if (user) {
    userStore.set(user);
  } else {
    userStore.set(null);
  }
});
