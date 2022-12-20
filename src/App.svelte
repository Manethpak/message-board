<script lang="ts">
  import Notifications from 'svelte-notifications';
  import Router from 'svelte-spa-router';
  import BreadCrumb from './components/BreadCrumb.svelte';
  import Header from "./components/Header.svelte";
  import { routes } from './routes';
</script>


<Notifications>
  <main class="bg-neutral-700 min-h-screen text-white flex flex-col items-center transition-all">
    <Header />
    <BreadCrumb />
    <Router {routes}/>
  </main>
</Notifications>

