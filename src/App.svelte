<script lang="ts" module>
  import { createContent } from './data/models/content.svelte';

  export let content = createContent();
</script>

<script>
  import { Route, Router } from 'svelte-routing';
  import ChangeLog from './components/pages/ChangeLog.svelte';
  import Story from './components/pages/Story.svelte';
  import About from './components/pages/About.svelte';
  import More from './components/pages/More.svelte';
  import Settings from './components/pages/Settings.svelte';
  import Home, { isDarkMode } from './components/pages/Home.svelte';


  let url = $state('');
  let dark = $derived(isDarkMode.value);
</script>

<div id="app" class="mx-auto lg:w-1/2" class:dark={dark}>
  <Router {url}>
    <div class="layout p-3 border h-full">
      <section class="">
        <Route path="/"><Home /></Route>
        <Route path="/story"><Story /></Route>
        <Route path="/change-log"><ChangeLog /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/more"><More /></Route>
        <Route path="/settings"><Settings/></Route> 
      </section>
    </div>
  </Router>
</div>

<style lang="postcss">
 .layout {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 65px auto;
  }
</style>
