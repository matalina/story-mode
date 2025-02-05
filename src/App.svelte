<script>
  import { Link, Route, Router } from 'svelte-routing';
  import magicBook from './assets/magic-book.svg';
  import ChangeLog from './components/pages/ChangeLog.svelte';
  import Story from './components/pages/Story.svelte';

  export let url = '';
</script>

<div id="app" class="mx-auto lg:w-1/3">
  <Router {url}>
    <div class="flex flex-col p-3 border h-dvh">
      <header class="flex justify-between items-center mb-3">
        <Link to="/" class="flex gap-3 items-center">
          <img src={magicBook} alt="Story Mode" class="h-8 mt-2" />
          <h2 class="text-3xl font-bold">Story Mode</h2>
        </Link>
        <div>
          <Link class="p-2 text-xs text-gray-500" to="/change-log">
            v1.250204.01
          </Link>
        </div>
      </header>
      <section class="grow">
        <Route path="/"><Story /></Route>
        <Route path="/change-log"><ChangeLog /></Route>
      </section>
    </div>
  </Router>
</div>

<style lang="postcss">
  @reference './app.css';
</style>
