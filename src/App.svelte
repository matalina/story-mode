<script lang="ts" module>
  import { createContent } from './lib/content.svelte';
  export let content = createContent();
</script>

<script>
  import { Link, Route, Router } from 'svelte-routing';
  import ChangeLog from './components/pages/ChangeLog.svelte';
  import Story from './components/pages/Story.svelte';
  import About from './components/pages/About.svelte';
  import Header from './components/ui/Header.svelte';
  export let url = '';
</script>

<div id="app" class="mx-auto lg:w-1/2">
  <Router {url}>
    <div class="layout p-3 border h-full">
      <Header />
      <section class="">
        <Route path="/"><Story /></Route>
        <Route path="/change-log"><ChangeLog /></Route>
        <Route path="/about"><About /></Route>
      </section>
    </div>
  </Router>
</div>

<style lang="postcss">
  @reference './app.css';

  .layout {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 65px auto;
  }
</style>
