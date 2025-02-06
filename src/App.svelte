<script>
  import { Link, Route, Router } from 'svelte-routing';
  import Logo from './assets/logo.svg';
  import ChangeLog from './components/pages/ChangeLog.svelte';
  import Story from './components/pages/Story.svelte';
  import GithubIcon from './assets/github.svg';
  import TimelineIcon from './assets/timeline.svg';
  import InfoIcon from './assets/info.svg';
  import About from './components/pages/About.svelte';

  export let url = '';
</script>

<div id="app" class="mx-auto lg:w-1/2">
  <Router {url}>
    <div class="layout p-3 border h-full">
      <header class="flex justify-between items-center mb-3">
        <Link to="/" class="flex gap-2 items-center">
          <img src={Logo} alt="Story Mode" class="h-15" />
          <h2 class="text-3xl font-bold">Story Mode</h2>
        </Link>
        <div class="flex gap-2 items-center">
          <Link to="/about">
            <img src={InfoIcon} alt="About" class="h-6"/>
          </Link>
          <Link to="/change-log">
            <img src={TimelineIcon} alt="Change Log" class="h-6"/>
          </Link>
          <a href="https://github.com/matalina/story-mode"><img src={GithubIcon} alt="Github" class="h-6"/></a>
        </div>
      </header>
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
