<script module lang="ts">
  import { createDarkMode } from "../../data/dark-mode.svelte";
  export let isDarkMode = createDarkMode();
</script>

<script lang="ts">
  import { Link } from "svelte-routing";
  import Logo from "../../assets/logo.svg";
  import GithubIcon from "../../assets/github.svg";
  import InfoIcon from "../../assets/info.svg";
  import GearIcon from "../../assets/gear.svg";
  import SunIcon from "../../assets/sun.svg";
  import MoonIcon from "../../assets/moon.svg";
  import BookIcon from "../../assets/open-book.svg";
  import { content } from "../../App.svelte";

  function toggleTheme() {
    isDarkMode.toggle();
  }

  let game = $state('Start a Game');
  let keys = $derived(Object.keys(content.value));
  let contentLength = $derived(keys.length);

  $effect(() => {
    if (contentLength > 0) {
      game = 'Continue Game';
    }
  })
</script>

<div id="home">
  <div class="flex items-center gap-2 justify-center my-30">
    <img src={Logo} alt="Story Mode" class="h-15" />
    <h2 class="text-3xl font-bold">Story Mode</h2>
  </div>
  <div class="my-10">
      <Link to="/story" class="flex gap-2 items-center justify-center">
        <img src={BookIcon} alt="Story" class="h-6 w-6"/>
        <span>{game}</span>
      </Link>
  </div>
  <div class="flex gap-2 items-center justify-center">
    <Link to="/settings">
      <img src={GearIcon} alt="Settings" class="h-6 w-6"/>
    </Link>
    <button onclick={toggleTheme} class="transparent">
      <img src={!isDarkMode.value ? SunIcon : MoonIcon} alt="Theme" class="h-6 w-6"/>
    </button>
    <Link to="/about">
      <img src={InfoIcon} alt="About" class="h-6 w-6"/>
    </Link>
    <a href="https://github.com/matalina/story-mode"><img src={GithubIcon} alt="Github" class="h-6 w-6"/></a>
  </div>
  <div>

  </div>
</div>