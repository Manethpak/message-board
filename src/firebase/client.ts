import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDV5R_LXI3XAXtf6o8eACViwpKJL4Y2gLw",
  authDomain: "svelte-message-board.firebaseapp.com",
  projectId: "svelte-message-board",
  storageBucket: "svelte-message-board.appspot.com",
  messagingSenderId: "608439620007",
  appId: "1:608439620007:web:5270c9b4024d3918426682",
};

const app = initializeApp(firebaseConfig);

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LdIvMIjAAAAAHmc9wqB_nLtdf-guhZCMut9fV9V"),
  isTokenAutoRefreshEnabled: true,
});

export const auth = getAuth(app);
export const db = getFirestore(app);
