<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import Header from './components/Header.svelte';
  import Counter from './lib/Counter.svelte'
</script>

<main class="bg-neutral-700 min-h-screen text-white">
  <Header />

  <Counter />

  <img src={svelteLogo} alt="Svelte logo" />
</main>

