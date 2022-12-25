<script lang="ts">
  import Notifications from 'svelte-notifications';
  import Router from 'svelte-spa-router';
  import Navigation from './components/Navigation.svelte';
  import Header from "./components/Header.svelte";
  import { routes } from './routes';
  import Footer from './components/Footer.svelte';
</script>


<Notifications>
  <main class="bg-neutral-700 min-h-screen text-white flex flex-col items-center transition-all">
    <Header />
    <Navigation />
    <Router {routes}/>
    <Footer />
  </main>
</Notifications>

