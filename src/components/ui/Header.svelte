<script module lang="ts">
  import { createDarkMode } from "../../data/dark-mode.svelte";
  export let isDarkMode = createDarkMode();
</script>

<script lang="ts">
  import { Link } from "svelte-routing";
  import Logo from "../../assets/logo.svg";
  import GithubIcon from "../../assets/github.svg";
  import TimelineIcon from "../../assets/timeline.svg";
  import InfoIcon from "../../assets/info.svg";
  import GearIcon from "../../assets/gear.svg";
  import SunIcon from "../../assets/sun.svg";
  import MoonIcon from "../../assets/moon.svg";
  
  function toggleTheme() {
    isDarkMode.toggle();
  }
</script>

<header class="flex justify-between items-center mb-3">
  <Link to="/" class="flex gap-2 items-center">
    <img src={Logo} alt="Story Mode" class="h-15" />
    <h2 class="text-3xl font-bold">Story Mode</h2>
  </Link>
  <div class="flex gap-2 items-center">
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
</header>