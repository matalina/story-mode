<script lang="ts">
  import { Link } from "svelte-routing";
  import Logo from "../../assets/logo.svg";
  import ClearButton from "../story-mode/ClearButton.svelte";
  import CopyButton from "../story-mode/CopyButton.svelte";
  import Divider from "./Divider.svelte";
  import MapButton from "../carta-map/MapButton.svelte";
</script>

<header class="flex justify-between items-center mb-3">
  <Link to="/" class="flex gap-2 items-center">
    <img src={Logo} alt="Story Mode" class="h-10" />
  </Link>
  <div class="flex gap-2 items-center">
    <MapButton />
    <Divider />
    <ClearButton/>
    <CopyButton />
  </div>
</header>