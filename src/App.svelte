<script>
  import { Link, Route, Router } from 'svelte-routing';
  import magicBook from './assets/magic-book.svg';
  import ChangeLog from './components/pages/ChangeLog.svelte';
  import Story from './components/pages/Story.svelte';

  export let url = '';
</script>

<div id="app" class="mx-auto lg:w-1/3">
  <Router {url}>
    <nav class="flex items-center w-full p-3">
      <div class="flex flex-grow text-lg">
        <Link to="/">
          <div
            class="px-3 py-2 mr-2 text-gray-900 border border-gray-900 focus:bg-gray-200 hover:bg-gray-200"
          >
            <img src={magicBook} alt="Story Mode" class="h-4" />
          </div>
        </Link>
      </div>
      <Link class="p-2 text-xs text-gray-500" to="/change-log">
        v1.250204.01
      </Link>
    </nav>
    <section>
      <Route path="/" component={Story} />
      <Route path="/change-log" component={ChangeLog} />
    </section>
  </Router>
</div>

<style lang="postcss">
  .active {
    @apply bg-gray-700 text-gray-100 border-gray-100;
  }
</style>
